export type CreateStudentDTO = {
  name: string;
  email: string;
  password: string;
};

export type UpdateStudentDTO = Partial<CreateStudentDTO> & {
  id: string;
};
