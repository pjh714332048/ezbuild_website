const modelPath = (directory: string, filename: string) =>
  `/architectural_models/${directory}/${filename}.glb`;

export const RESULT_MODELS: Readonly<Record<string, string>> = {
  bnb2008Bauhaus: modelPath('A', '文旅民宿8间（包豪斯-渲染-贴图）'),
  bnb2008Natural: modelPath('B', '文旅民宿8间（自然风-渲染-贴图）'),
  bnb20012Bauhaus: modelPath('C', '文旅民宿12间（包豪斯-渲染-贴图）'),
  bnb20012Natural: modelPath('D', '文旅民宿12间（自然风-渲染-贴图）'),
  houseSmall12Bauhaus: modelPath('E', '自建住宅100㎡住1~2人（包豪斯-渲染-贴图）'),
  houseSmall12Natural: modelPath('F', '自建住宅100㎡住1~2人（自然风-渲染-贴图）'),
  houseSmall34Bauhaus: modelPath('G', '自建住宅100㎡住3~4人（包豪斯-渲染-贴图）'),
  houseSmall34Natural: modelPath('H', '自建住宅100㎡住3~4人（自然风-渲染-贴图）'),
  houseMid12Bauhaus: modelPath('I', '自建住宅200㎡住1~2人（包豪斯-渲染-贴图）'),
  houseMid12Natural: modelPath('J', '自建住宅200㎡住1~2人（自然风-渲染-贴图）'),
  houseMid34Bauhaus: modelPath('K', '自建住宅200㎡住3~4人（包豪斯-渲染-贴图）'),
  houseMid34Natural: modelPath('L', '自建住宅200㎡住3~4人(自然风-渲染-贴图）'),
};
