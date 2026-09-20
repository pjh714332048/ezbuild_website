import type { QuestionOption } from './QuestionOption';

export type QuestionNode = {
  readonly id: string;
  readonly title: string;
  readonly enTitle?: string;
  readonly options: readonly QuestionOption[];
};
