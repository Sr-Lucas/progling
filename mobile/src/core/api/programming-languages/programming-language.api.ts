import { ProgrammingLanguage } from '@/core/types/programming-language.types';
import { IProgrammingLanguageApi } from './programming-language.interface';
import ResponseError from '@/core/error/request.error';
import request from '../request';

export class ProgrammingLanguageApi implements IProgrammingLanguageApi {
  async findAll(): Promise<ProgrammingLanguage[]> {
    try {
      const response = await request.get<ProgrammingLanguage[]>(
        `/programming-languages`,
      );

      return response.data;
    } catch (e) {
      throw new ResponseError({
        message: 'Get programming languages error',
        stack: 'ProgrammingLanguageApi',
        code: (e as any).response?.status ?? 400,
      });
    }
  }

  async findOne(id: string): Promise<ProgrammingLanguage> {
    try {
      const response = await request.get<ProgrammingLanguage>(
        `/programming-languages/${id}`,
      );

      return response.data;
    } catch (e) {
      throw new ResponseError({
        message: 'Get programming language error',
        stack: 'ProgrammingLanguageApi',
        code: (e as any).response?.status ?? 400,
      });
    }
  }
}
