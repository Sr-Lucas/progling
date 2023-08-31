import ResponseError from '@/core/error/request.error';
import request from '../request';
import { IAuthApi } from './auth.interface';
import { Auth, Refresh } from '@/core/types/auth.types';
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
      throw new ResponseError({
        message: 'Login error',
        stack: 'AuthApi',
        code: (e as any).response.status,
      });
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
      throw new ResponseError({
        message: 'Register error',
        stack: 'AuthApi',
        code: (e as any).response.status,
      });
    }
  }

  async getMe(): Promise<Student> {
    try {
      const response = await request.get<Student>('/auth/student/me');

      return response.data;
    } catch (e) {
      console.log(e);
      throw new ResponseError({
        message: 'Get me error',
        stack: 'AuthApi',
        code: (e as any).response.status,
      });
    }
  }

  async refreshToken(refreshToken: string): Promise<Refresh> {
    try {
      const response = await request.post<Refresh>('/auth/student/refresh', {
        refreshToken,
      });

      return response.data;
    } catch (e) {
      throw new ResponseError({
        message: 'Refresh token error',
        stack: 'AuthApi',
        code: (e as any).response.status,
      });
    }
  }
}
