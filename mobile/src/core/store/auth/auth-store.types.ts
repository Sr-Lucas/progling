import { ProgrammingLanguage } from '@/core/types/programming-language.types';
import { SignInDTO, SignUpDTO, Student } from '@/core/types/user.types';

export type AuthState = {
  user?: Student | null;
  token?: string | null;
  refreshToken?: string | null;
  isLoading: boolean;
  programmingLanguage: ProgrammingLanguage | null;
};

export type IAuthStore = AuthState & {
  signIn: ({}: SignInDTO) => Promise<void>;
  signUp: ({}: SignUpDTO) => Promise<void>;
  refreshAccessToken: () => Promise<void>;
  setUser: (user: Student) => void;
  setToken: (token: string) => void;
  setProgrammingLanguage: (language: ProgrammingLanguage) => void;
  logOut: () => void;
  getMe: () => Promise<Student | undefined>;
};
