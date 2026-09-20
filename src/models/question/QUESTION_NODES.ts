import type { QuestionNode } from './QuestionNode';

export const QUESTION_NODES: Readonly<Record<string, QuestionNode>> = {
  ['function']: {
    id: 'function',
    title: '请问您想设计什么类型的建筑',
    enTitle: 'What type of building would you like to design?',
    options: [
      { label: '文旅民宿', enLabel: 'Cultural tourism homestay', next: 'bnbSize' },
      { label: '自建住宅', enLabel: 'Self-built house', next: 'houseSize' },
    ],
  },
  ['bnbSize']: {
    id: 'bnbSize',
    title: '您希望建筑体量多大？',
    enTitle: 'How large do you want the building to be?',
    options: [{ label: '≥200㎡', enLabel: '≥200 m²', next: 'bnbRooms' }],
  },
  ['bnbRooms']: {
    id: 'bnbRooms',
    title: '请问您需要多少间客房？',
    enTitle: 'How many guest rooms do you need?',
    options: [
      { label: '8间', enLabel: '8 rooms', next: 'result:bnb2008' },
      { label: '12间', enLabel: '12 rooms', next: 'result:bnb20012' },
    ],
  },
  ['houseSize']: {
    id: 'houseSize',
    title: '您希望的建筑面积是多少？',
    enTitle: 'What is the desired building area?',
    options: [
      { label: '<100㎡', enLabel: '<100 m²', next: 'houseSmallPeople' },
      { label: '100㎡~200㎡', enLabel: '100~200 m²', next: 'houseMidPeople' },
    ],
  },
  ['houseSmallPeople']: {
    id: 'houseSmallPeople',
    title: '请问使用人数是？',
    enTitle: 'How many people will be using it?',
    options: [
      { label: '1~2人', enLabel: '1~2 people', next: 'result:houseSmall12' },
      { label: '3~4人', enLabel: '3~4 people', next: 'result:houseSmall34' },
    ],
  },
  ['houseMidPeople']: {
    id: 'houseMidPeople',
    title: '居住人数',
    enTitle: 'How many people will be living there?',
    options: [
      { label: '1~2人', enLabel: '1~2 people', next: 'result:houseMid12' },
      { label: '3~4人', enLabel: '3~4 people', next: 'result:houseMid34' },
    ],
  },
};
