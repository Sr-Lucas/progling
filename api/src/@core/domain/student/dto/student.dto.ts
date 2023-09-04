export type CreateStudentDTO = {
  name: string;
  email: string;
  password: string;
};

export type CreateStudentRepositoryDTO = CreateStudentDTO & {
  hearts: number;
  heartsRenewAt: Date;
};

export type UpdateStudentRepositoryDTO = Partial<CreateStudentRepositoryDTO> & {
  id: string;
};

export type UpdateStudentDTO = Partial<CreateStudentDTO> & {
  id: string;
};
