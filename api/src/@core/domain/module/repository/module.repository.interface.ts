import {
  FindAllByProgrammingLanguageDTO,
  FindByIdDTO,
} from '../dto/find-all-by-programming-language.dto';
import { Module } from '../entity/module.entity';

export interface IModuleRepository {
  findAll(userId: string): Promise<Module[]>;
  findById({}: FindByIdDTO): Promise<Module | null>;
  findAllByProgrammingLanguageId({}: FindAllByProgrammingLanguageDTO): Promise<
    Module[]
  >;
}
