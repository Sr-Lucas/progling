import ResponseError from '@/core/error/request.error';
import request from '../request';
import { IAuthApi } from './auth.interface';
import { Auth } from '@/core/types/auth.types';
import { SignInDTO, SignUpDTO, Student } from '@/core/types/user.types';

export class AuthApi implements IAuthApi {
  async signIn({ email, password }: SignInDTO): Promise<Auth> {
    try {
      const response = await request.post<Auth>('/auth/student', {
        email,
        password,
      });

      console.log(response.data);

      return response.data;
    } catch (e) {
      throw new ResponseError(e);
    }
  }

  async signUp({ email, name, password }: SignUpDTO): Promise<Auth> {
    try {
      const response = await request.post<Auth>('auth/student/register', {
        email,
        name,
        password,
      });

      return response.data;
    } catch (e) {
      throw new ResponseError(e);
    }
  }

  async getMe(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
