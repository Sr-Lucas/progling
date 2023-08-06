import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';
import { IProgrammingLanguageRepository } from '@domain/programming-language/repository/programming-language.repository.interface';

export class FindByIdProgrammingLanguageUseCase {
  constructor(
    private readonly programmingLanguageRepository: IProgrammingLanguageRepository,
  ) {}

  async execute(id: string): Promise<ProgrammingLanguage> {
    const programmingLanguage =
      await this.programmingLanguageRepository.findById(id);

    if (!programmingLanguage) {
      throw 'Programming Language not found';
    }

    return programmingLanguage;
  }
}
