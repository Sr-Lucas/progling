export type CreateStudentDTO = {
  name: string;
  email: string;
  password: string;
};

export type CreateStudentRepositoryDTO = CreateStudentDTO & {
  hearts: number;
  heartsRenewAt: Date;
  streak: number;
  streakRenewAt: Date;
  streakResetAt: Date;
};

export type UpdateStudentRepositoryDTO = Partial<CreateStudentRepositoryDTO> & {
  id: string;
};

export type UpdateStudentDTO = Partial<CreateStudentDTO> & {
  id: string;
};
