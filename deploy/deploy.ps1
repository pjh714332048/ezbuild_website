# 生产部署：构建 -> 推送 TCR -> 应用配置 -> 滚动更新 -> 可选外部检查
# 用法：.\deploy\deploy.ps1 [-Version 20261021-120000] [-BaseUrl http://节点IP:30081]
param(
    [ValidatePattern('^[A-Za-z0-9_][A-Za-z0-9_.-]{0,119}$')]
    [string]$Version = (Get-Date -Format 'yyyyMMdd-HHmmss'),
    [string]$BaseUrl = '',
    [switch]$SkipBuild
)

$ErrorActionPreference = 'Stop'
if ($SkipBuild -and -not $PSBoundParameters.ContainsKey('Version')) {
    throw '使用 -SkipBuild 时请通过 -Version 指定本地已有镜像的版本。'
}
$IMAGE_REPO = 'ezbuild-images.tencentcloudcr.com/ezbuild/ezbuild'
$IMAGE = "${IMAGE_REPO}:website-$Version"
$NAMESPACE = 'ezbuild'
$DEPLOYMENT = 'ezbuild-website'
$REPO_ROOT = Split-Path $PSScriptRoot -Parent
$K8S_DIR = Join-Path $REPO_ROOT 'k8s'
$DEPLOYMENT_YAML = Join-Path $K8S_DIR 'deployment.yaml'
$BaseUrl = $BaseUrl.TrimEnd('/')

foreach ($command in @('docker', 'kubectl')) {
    if (-not (Get-Command $command -ErrorAction SilentlyContinue)) { throw "未安装 $command 或未加入 PATH" }
}
Write-Host "==> 镜像: $IMAGE" -ForegroundColor Cyan
kubectl get secret tcr-secret -n $NAMESPACE -o name
if ($LASTEXITCODE -ne 0) { throw '无法读取 ezbuild/tcr-secret，请检查 kubectl 上下文，并按 DEPLOY.md 配置镜像拉取凭证。' }
docker info | Out-Null
if ($LASTEXITCODE -ne 0) { throw 'Docker 未运行，请先启动 Docker Desktop' }

if (-not $SkipBuild) {
    Write-Host '==> 构建镜像...' -ForegroundColor Cyan
    docker build -t $IMAGE $REPO_ROOT
    if ($LASTEXITCODE -ne 0) { throw '镜像构建失败' }
}

Write-Host '==> 推送到 TCR...' -ForegroundColor Cyan
docker push $IMAGE
if ($LASTEXITCODE -ne 0) { throw '镜像推送失败，请检查 TCR 登录凭证、网络及访问控制' }

# 固定推送后的摘要，避免重复使用版本标签时节点拉到旧镜像。
$digestJson = docker image inspect $IMAGE --format '{{json .RepoDigests}}'
if ($LASTEXITCODE -ne 0) { throw '读取已推送镜像摘要失败' }
$repoDigest = @($digestJson | ConvertFrom-Json) | Where-Object { $_ -like "${IMAGE_REPO}@sha256:*" } | Select-Object -First 1
if (-not $repoDigest) { throw '未找到已推送镜像的仓库摘要' }
$DEPLOY_IMAGE = "${IMAGE}@$($repoDigest.Split('@')[1])"
Write-Host "==> 部署固定摘要: $DEPLOY_IMAGE" -ForegroundColor Cyan

$content = Get-Content $DEPLOYMENT_YAML -Raw -Encoding UTF8
$imagePattern = '(?m)^(\s*image:)[^\r\n]+'
if ([regex]::Matches($content, $imagePattern).Count -ne 1) { throw 'deployment.yaml 必须恰好包含一个 image 字段' }
$updated = [regex]::Replace($content, $imagePattern, "`${1} $DEPLOY_IMAGE")
Set-Content $DEPLOYMENT_YAML $updated -NoNewline -Encoding UTF8

foreach ($name in @('namespace.yaml', 'configmap.yaml', 'deployment.yaml', 'service.yaml')) {
    kubectl apply -f (Join-Path $K8S_DIR $name)
    if ($LASTEXITCODE -ne 0) { throw "应用配置失败: $name" }
}

# 同版本重发、仅 ConfigMap 变更也重新创建 Pod，使配置生效。
kubectl rollout restart "deployment/$DEPLOYMENT" -n $NAMESPACE
if ($LASTEXITCODE -ne 0) { throw '触发滚动更新失败' }
kubectl rollout status "deployment/$DEPLOYMENT" -n $NAMESPACE --timeout=1800s
if ($LASTEXITCODE -ne 0) { throw "滚动更新未完成，请执行 kubectl describe pods -n $NAMESPACE -l app=$DEPLOYMENT" }
kubectl get pods -n $NAMESPACE -l "app=$DEPLOYMENT" -o wide
if ($LASTEXITCODE -ne 0) { throw '读取 Pod 状态失败' }
kubectl get service $DEPLOYMENT -n $NAMESPACE
if ($LASTEXITCODE -ne 0) { throw '读取 Service 状态失败' }

if ($BaseUrl) {
    $healthy = $false
    for ($attempt = 1; $attempt -le 6; $attempt++) {
        try {
            $page = Invoke-WebRequest -Uri "$BaseUrl/" -UseBasicParsing -TimeoutSec 10
            if ($page.StatusCode -ne 200 -or $page.Content -notmatch '<div\s+id="root"') {
                throw '首页未返回预期的 React 页面'
            }
            $healthy = $true
            break
        } catch {
            Write-Host "[WARN] 访问检查 $attempt/6 失败: $_" -ForegroundColor Yellow
            if ($attempt -lt 6) { Start-Sleep -Seconds 5 }
        }
    }
    if (-not $healthy) { throw 'Pod 已更新，但外部检查失败。请检查访问地址、安全组 TCP 30081 及域名入口配置。' }
    Write-Host "==> 首页检查通过: $BaseUrl/" -ForegroundColor Green
    $resource = Invoke-RestMethod -Uri "$BaseUrl/api/v1/website/models/resource/?key=club%2FA.glb" -TimeoutSec 30
    if ($resource.status -ne 200 -or $resource.data.key -ne 'club/A.glb' -or -not $resource.data.url) {
        throw '模型签名 API 检查失败，请检查 Nginx /api/ 代理和 Django 接口部署。'
    }
    Write-Host '==> 模型签名 API 检查通过' -ForegroundColor Green
}
Write-Host '==> ezbuild-website 生产部署完成' -ForegroundColor Green
