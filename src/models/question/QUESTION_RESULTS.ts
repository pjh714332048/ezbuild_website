import type { QuestionResult } from './QuestionResult';

export const QUESTION_RESULTS: Readonly<Record<string, QuestionResult>> = {
  ['bnb2008']: {
    id: 'bnb2008',
    title: '建筑风格 · 文旅民宿 · ≥200㎡ · 8 间',
    description: '推荐现代简约或新中式风格，契合 8 间客房的紧凑布局。',
  },
  ['bnb20012']: {
    id: 'bnb20012',
    title: '建筑风格 · 文旅民宿 · ≥200㎡ · 12 间',
    description: '推荐工业风或轻奢风，适配 12 间客房的大体量场景。',
  },
  ['houseSmall12']: {
    id: 'houseSmall12',
    title: '建筑风格 · 自建住宅 · <100㎡ · 1~2 人',
    description: '推荐 Loft 或北欧风，充分利用紧凑空间。',
  },
  ['houseSmall34']: {
    id: 'houseSmall34',
    title: '建筑风格 · 自建住宅 · <100㎡ · 3~4 人',
    description: '推荐日式禅意风，高效收纳适配多口之家。',
  },
  ['houseMid12']: {
    id: 'houseMid12',
    title: '建筑风格 · 自建住宅 · 100~200㎡ · 1~2 人',
    description: '推荐现代简约或美式风格，中等空间灵活布局。',
  },
  ['houseMid34']: {
    id: 'houseMid34',
    title: '建筑风格 · 自建住宅 · 100~200㎡ · 3~4 人',
    description: '推荐新中式或田园风，中等空间更适合多人居住。',
  },
};
