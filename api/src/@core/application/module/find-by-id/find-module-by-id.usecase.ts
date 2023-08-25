import { Module } from '@domain/module/entity/module.entity';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';

export class FindModuleByIdUseCase {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  async execute(id: string): Promise<Module> {
    const module = await this.moduleRepository.findById({
      id: id,
      userId: '1',
    });

    if (!module) {
      throw 'Module not found';
    }

    return module;
  }
}
