import { Student } from './user.types';

export type Auth = {
  accessToken: string;
  user: Student;
};
