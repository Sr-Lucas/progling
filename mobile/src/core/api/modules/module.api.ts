import { Module } from '@/core/types/module.types';
import { IModuleApi } from './module.interface';
import request from '../request';
import ResponseError from '@/core/error/request.error';

export class ModuleApi implements IModuleApi {
  async findAll(): Promise<Module[]> {
    try {
      const response = await request.get<Module[]>(`/modules`);

      return response.data;
    } catch (e) {
      throw new ResponseError({
        message: 'Get modules error',
        stack: 'ModuleApi',
        code: (e as any).response?.status ?? 400,
      });
    }
  }

  async findOne(id: string): Promise<Module> {
    try {
      const response = await request.get<Module>(`/modules/${id}`);

      console.log('response', response.data);

      return response.data;
    } catch (e) {
      throw new ResponseError({
        message: 'Get module error',
        stack: 'ModuleApi',
        code: (e as any).response?.status ?? 400,
      });
    }
  }

  async findByLanguageId(id: string): Promise<Module[]> {
    // try {
    const response = await request.get<Module[]>(
      `programming-languages/${id}/modules`,
    );

    return response.data;
    // } catch (e) {
    //   console.log(e);
    //   throw new ResponseError({
    //     message: 'Get modules error',
    //     stack: 'ModuleApi',
    //     code: (e as any).response?.status ?? 400,
    //   });
    // }
  }
}
