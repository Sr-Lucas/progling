import { SignInDTO, SignUpDTO, Student } from '@/core/types/user.types';

export type AuthState = {
  user?: Student | null;
  token?: string | null;
  refreshToken?: string | null;
  isLoading: boolean;
};

export type IAuthStore = AuthState & {
  signIn: ({}: SignInDTO) => Promise<void>;
  signUp: ({}: SignUpDTO) => Promise<void>;
  setUser: (user: Student) => void;
  setToken: (token: string) => void;
  logOut: () => void;
  getMe: () => Promise<Student | undefined>;
};
