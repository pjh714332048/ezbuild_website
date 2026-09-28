export const ZH_COMMON = {
  questionNodes: {
    function: '请问您想设计什么类型建筑',
    bnbSize: '您希望建筑体量多大？',
    bnbRooms: '请问您需要多少间客房？',
    houseSize: '您希望的建筑面积是多少？',
    houseSmallPeople: '请问使用人数是？',
    houseMidPeople: '居住人数',
  },
  questionOptions: {
    culturalTourismHomestay: '文旅民宿',
    selfBuiltHouse: '自建住宅',
    eightRooms: '8间',
    twelveRooms: '12间',
    oneToTwoPeople: '1~2人',
    threeToFourPeople: '3~4人',
  },
  questionResults: {
    bnb2008: {
      title: '建筑风格 · 文旅民宿 · ≥200㎡ · 8 间',
      description: '推荐现代简约或新中式风格，契合 8 间客房的紧凑布局。',
    },
    bnb20012: {
      title: '建筑风格 · 文旅民宿 · ≥200㎡ · 12 间',
      description: '推荐工业风或轻奢风，适配 12 间客房的大体量场景。',
    },
    houseSmall12: {
      title: '建筑风格 · 自建住宅 · <100㎡ · 1~2 人',
      description: '推荐 Loft 或北欧风，充分利用紧凑空间。',
    },
    houseSmall34: {
      title: '建筑风格 · 自建住宅 · <100㎡ · 3~4 人',
      description: '推荐日式禅意风，高效收纳适配多口之家。',
    },
    houseMid12: {
      title: '建筑风格 · 自建住宅 · 100~200㎡ · 1~2 人',
      description: '推荐现代简约或美式风格，中等空间灵活布局。',
    },
    houseMid34: {
      title: '建筑风格 · 自建住宅 · 100~200㎡ · 3~4 人',
      description: '推荐新中式或田园风，中等空间更适合多人居住。',
    },
  },
} as const;
