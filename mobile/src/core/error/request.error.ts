import { AxiosError } from 'axios';

type Error = {
  message: string;
  stack: string;
  code: number;
};

export default class ResponseError {
  message: string;
  stack: string;
  code: number;

  constructor({ message, code, stack }: Error) {
    this.message = message;
    this.code = code;
    this.stack = stack;
  }
}
