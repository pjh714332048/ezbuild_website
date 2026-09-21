import { ESLint } from 'eslint';
import path from 'path';
import type { Plugin } from 'vite';

/**
 * 自定义 Vite 插件：在开发服务器中集成 ESLint 检查
 * 保存文件后在终端显示 ESLint 错误和警告
 * 仅在 dev 模式（pnpm dev）下生效，build 时不运行
 */
export default function eslintPlugin(): Plugin {
  return {
    name: 'vite-eslint',

    configureServer(server) {
      const projectRoot = process.cwd();
      const eslint = new ESLint({ cwd: projectRoot, fix: false });

      const isTargetFile = (id: string) =>
        /\.[cm]?[jt]sx?$/.test(id) && !id.includes('node_modules');

      const lintFile = async (filePath: string) => {
        try {
          const results = await eslint.lintFiles(filePath);
          const hasWarnings = results.some(r => r.warningCount > 0);
          const hasErrors = results.some(r => r.errorCount > 0);

          if (hasErrors || hasWarnings) {
            const formatter = await eslint.loadFormatter('stylish');
            const output = await formatter.format(results);
            const trimmed = output.replace(/\n\s*$/, '');
            if (trimmed) {
              console.log(trimmed);
            }
          } else {
            const relativePath = path.relative(projectRoot, filePath);
            console.log(`\x1b[32m✓\x1b[0m ESLint: ${relativePath} — no issues`);
          }
        } catch (err) {
          console.error(`[eslint-plugin] Lint failed for ${filePath}:`, err);
        }
      };

      // 文件变更时 lint 单个文件
      const handleChange = (filePath: string) => {
        if (isTargetFile(filePath)) {
          lintFile(filePath);
        }
      };

      server.watcher.on('change', handleChange);
      server.watcher.on('add', handleChange);

      // 服务器启动时运行初始全量检查
      server.httpServer?.once('listening', async () => {
        try {
          const results = await eslint.lintFiles(['src/**/*.{ts,tsx}']);
          const hasWarnings = results.some(r => r.warningCount > 0);
          const hasErrors = results.some(r => r.errorCount > 0);

          if (hasErrors || hasWarnings) {
            const formatter = await eslint.loadFormatter('stylish');
            const output = await formatter.format(results);
            const trimmed = output.replace(/\n\s*$/, '');
            if (trimmed) {
              console.log(trimmed);
            }
          }
        } catch (err) {
          console.error('[eslint-plugin] Initial lint failed:', err);
        }
      });
    },
  };
}
