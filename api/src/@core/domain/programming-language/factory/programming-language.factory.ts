import { ImageFactory } from '@domain/image/factory/image.factory';
import { ProgrammingLanguage } from '../entity/programming-language.entity';

type ProgrammingLanguageType = {
  id: string;
  name: string;
  image: {
    id: string;
    name: string;
    storeType: string;
    createdAt: Date;
    updatedAt: Date;
  };
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
      ImageFactory.convertOne(programmingLanguage.image)!,
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
