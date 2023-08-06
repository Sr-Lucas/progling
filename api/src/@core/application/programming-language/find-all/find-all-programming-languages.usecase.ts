import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';
import { IProgrammingLanguageRepository } from '@domain/programming-language/repository/programming-language.repository.interface';

export class FindAllProgrammingLanguagesUseCase {
  constructor(
    private readonly programmingLanguageRepository: IProgrammingLanguageRepository,
  ) {}

  async execute(): Promise<ProgrammingLanguage[]> {
    return this.programmingLanguageRepository.findAll();
  }
}
