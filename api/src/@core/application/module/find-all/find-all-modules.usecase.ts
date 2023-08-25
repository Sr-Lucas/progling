import { Module } from '@domain/module/entity/module.entity';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';

export class FindAllModulesUseCase {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  async execute(): Promise<Module[]> {
    return this.moduleRepository.findAll('1');
  }
}
