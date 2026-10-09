import type { QuestionNode } from './QuestionNode';

export const QUESTION_NODES: Readonly<Record<string, QuestionNode>> = {
  ['function']: {
    id: 'function',
    title: '您想设计哪类建筑？',
    enTitle: 'What type of building would you like to design?',
    options: [
      { label: '文旅民宿', enLabel: 'Tourism accommodation', next: 'bnbSize' },
      { label: '自建住宅', enLabel: 'Private home', next: 'houseSize' },
    ],
  },
  ['bnbSize']: {
    id: 'bnbSize',
    title: '您计划的建筑面积是多少？',
    enTitle: 'What floor area do you have in mind?',
    options: [{ label: '200 平方米及以上', enLabel: '200 m² or more', next: 'bnbRooms' }],
  },
  ['bnbRooms']: {
    id: 'bnbRooms',
    title: '您需要多少间客房？',
    enTitle: 'How many guest rooms do you need?',
    options: [
      { label: '8 间', enLabel: '8 guest rooms', next: 'result:bnb2008' },
      { label: '12 间', enLabel: '12 guest rooms', next: 'result:bnb20012' },
    ],
  },
  ['houseSize']: {
    id: 'houseSize',
    title: '您计划的建筑面积是多少？',
    enTitle: 'What floor area do you have in mind?',
    options: [
      { label: '少于 100 平方米', enLabel: 'Less than 100 m²', next: 'houseSmallPeople' },
      { label: '100–200 平方米', enLabel: '100–200 m²', next: 'houseMidPeople' },
    ],
  },
  ['houseSmallPeople']: {
    id: 'houseSmallPeople',
    title: '预计有多少人居住？',
    enTitle: 'How many people will live here?',
    options: [
      { label: '1–2 人', enLabel: '1–2 people', next: 'result:houseSmall12' },
      { label: '3–4 人', enLabel: '3–4 people', next: 'result:houseSmall34' },
    ],
  },
  ['houseMidPeople']: {
    id: 'houseMidPeople',
    title: '预计有多少人居住？',
    enTitle: 'How many people will live here?',
    options: [
      { label: '1–2 人', enLabel: '1–2 people', next: 'result:houseMid12' },
      { label: '3–4 人', enLabel: '3–4 people', next: 'result:houseMid34' },
    ],
  },
};
