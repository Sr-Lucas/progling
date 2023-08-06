import { ProgrammingLanguage } from '../entity/programming-language.entity';

export interface IProgrammingLanguageRepository {
  findAll(): Promise<ProgrammingLanguage[]>;
  findById(id: string): Promise<ProgrammingLanguage | null>;
}
