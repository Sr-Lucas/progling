export type MiniGameType = 'TRUE_FALSE' | 'CODE_COMPLETION' | 'CODE_ORDERING';

export type MiniGame = {
  id: string;
  question?: string;
  studentAnswers: StudentAnswer[];
  type: MiniGameType;
  correctAnswer?: boolean;
  createdAt: string;
  updatedAt: string;
  code?: string;
  options?: Option[];
  correctOrder?: number[];
};

export type Option = {
  id: string;
  content: string;
  isCorrect?: boolean;
  createdAt: string;
  updatedAt: string;
  order?: number;
};

export type AnswerType = boolean | string | number[];

export type StudentAnswer = {
  id: string;
  studentId: string;
  miniGameId: string;
  answer: AnswerType;
  createdAt: string;
  updatedAt: string;
};
