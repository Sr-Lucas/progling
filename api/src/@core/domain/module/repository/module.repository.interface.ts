import {
  FindAllModulesByProgrammingLanguageDTO,
  FindModuleByIdDTO,
} from '../dto/module.dto';
import { Module } from '../entity/module.entity';

export interface IModuleRepository {
  findAll(userId: string): Promise<Module[]>;
  findById({}: FindModuleByIdDTO): Promise<Module | null>;
  findAllByProgrammingLanguageId({}: FindAllModulesByProgrammingLanguageDTO): Promise<
    Module[]
  >;
}
