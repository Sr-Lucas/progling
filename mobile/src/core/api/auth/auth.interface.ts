import { Auth } from '@/core/types/auth.types';
import { SignInDTO, SignUpDTO, Student } from '@/core/types/user.types';

export interface IAuthApi {
  signIn({}: SignInDTO): Promise<Auth>;
  signUp({}: SignUpDTO): Promise<Auth>;
  getMe(): Promise<Student>;
}
