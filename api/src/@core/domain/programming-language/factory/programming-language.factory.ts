import { ProgrammingLanguage } from '../entity/programming-language.entity';

type ProgrammingLanguageType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export class ProgrammingLanguageFactory {
  static convertOne(
    programmingLanguage?: ProgrammingLanguageType | null,
  ): ProgrammingLanguage | null {
    if (!programmingLanguage) return null;

    return new ProgrammingLanguage(
      programmingLanguage.name,
      programmingLanguage.description,
      programmingLanguage.id,
      programmingLanguage.createdAt,
      programmingLanguage.updatedAt,
    );
  }
  static convertMany(
    programmingLanguages: ProgrammingLanguageType[],
  ): ProgrammingLanguage[] {
    return programmingLanguages.map(
      (programmingLanguage) => this.convertOne(programmingLanguage)!,
    );
  }
}
