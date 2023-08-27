export type CreateStudentAnswerDTO = {
  studentId: string;
  miniGameId: string;
  answer: boolean | string | number[];
};

export type UpdateStudentAnswerDTO = Partial<CreateStudentAnswerDTO> & {
  id: string;
};
