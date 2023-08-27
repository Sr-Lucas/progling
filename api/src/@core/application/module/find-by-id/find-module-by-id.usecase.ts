import { FindModuleByIdDTO } from '@domain/module/dto/module.dto';
import { Module } from '@domain/module/entity/module.entity';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';

export class FindModuleByIdUseCase {
  constructor(private readonly moduleRepository: IModuleRepository) {}

  async execute({ id, userId }: FindModuleByIdDTO): Promise<Module> {
    const module = await this.moduleRepository.findById({
      id,
      userId,
    });

    if (!module) {
      throw 'Module not found';
    }

    return module;
  }
}
