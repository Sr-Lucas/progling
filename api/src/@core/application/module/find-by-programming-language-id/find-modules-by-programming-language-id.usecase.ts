import { FindAllModulesByProgrammingLanguageDTO } from '@domain/module/dto/module.dto';
import { Module } from '@domain/module/entity/module.entity';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';
import { IProgrammingLanguageRepository } from '@domain/programming-language/repository/programming-language.repository.interface';

export class FindModulesByProgrammingLanguageIdUseCase {
  constructor(
    private readonly programmingLanguageRepository: IProgrammingLanguageRepository,
    private readonly moduleRepository: IModuleRepository,
  ) {}

  async execute({
    programmingLanguageId,
    userId,
  }: FindAllModulesByProgrammingLanguageDTO): Promise<Module[]> {
    const programmingLanguageExists =
      await this.programmingLanguageRepository.findById(programmingLanguageId);

    if (!programmingLanguageExists) {
      throw 'Programming language not found';
    }

    return this.moduleRepository.findAllByProgrammingLanguageId({
      programmingLanguageId,
      userId,
    });
  }
}
