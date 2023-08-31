import { Student } from './user.types';

export type Auth = {
  accessToken: string;
  refreshToken: string;
  user: Student;
};

export type Refresh = {
  accessToken: string;
  refreshToken: string;
};
