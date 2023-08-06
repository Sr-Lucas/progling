import { Module } from '../entity/module.entity';

export interface IModuleRepository {
  findAll(): Promise<Module[]>;
  findById(id: string): Promise<Module | null>;
  findAllByProgrammingLanguageId(id: string): Promise<Module[]>;
}
