import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';
import { IProgrammingLanguageRepository } from '@domain/programming-language/repository/programming-language.repository.interface';

export class FindAllProgrammingLanguagesUseCase {
  constructor(
    private readonly programmingLanguageRepository: IProgrammingLanguageRepository,
  ) {}

  async execute(userId: string): Promise<ProgrammingLanguage[]> {
    const programmingLanguages =
      await this.programmingLanguageRepository.findAll(userId);

    for (const programmingLanguage of programmingLanguages) {
      if (programmingLanguage.id) {
        const progression =
          await this.programmingLanguageRepository.getProgressionByProgrammingLanguage(
            programmingLanguage.id,
            userId,
          );
        programmingLanguage.progression = progression;
      }
    }

    return programmingLanguages;
  }
}
