export type MiniGame = {
  id: string;
  question?: string;
  type: string;
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
