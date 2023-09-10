import { ProgrammingLanguage } from '../entity/programming-language.entity';

export interface IProgrammingLanguageRepository {
  findAll(userId: string): Promise<ProgrammingLanguage[]>;
  findById(id: string): Promise<ProgrammingLanguage | null>;
  getProgressionByProgrammingLanguage(
    programmingLanguageId: string,
    userId: string,
  ): Promise<number>;
}
