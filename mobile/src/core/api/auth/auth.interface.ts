import { Auth } from '@/core/types/auth.types';
import { SignInDTO, SignUpDTO } from '@/core/types/user.types';

export interface IAuthApi {
  signIn({}: SignInDTO): Promise<Auth>;
  signUp({}: SignUpDTO): Promise<Auth>;
  getMe(): Promise<void>;
}
