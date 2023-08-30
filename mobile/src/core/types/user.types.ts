export type Student = {
  id: string;
  name: string;
  email: string;
};

export type SignInDTO = {
  email: string;
  password: string;
};

export type SignUpDTO = {
  name: string;
  email: string;
  password: string;
};
