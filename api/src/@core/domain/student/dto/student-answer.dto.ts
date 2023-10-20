import { CodeOrderingMiniGameOption } from '@domain/minigame/object-value/code-ordering-minigame-option';

export type CreateStudentAnswerDTO = {
  studentId: string;
  miniGameId: string;
  answer: boolean | string | number[];
  options?: CodeOrderingMiniGameOption[] | null;
};

export type UpdateStudentAnswerDTO = Partial<CreateStudentAnswerDTO> & {
  id: string;
};

export type DeleteStudentAnswerDTO = {
  studentId: string;
  levelId: string;
};
