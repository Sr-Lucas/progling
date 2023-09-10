import { ProgrammingLanguage } from '@/core/types/programming-language.types';

export type ProgrammingLanguageState = {
  languages: ProgrammingLanguage[];
  currentLanguage: ProgrammingLanguage | null;
};

export type IProgrammingLanguageStore = ProgrammingLanguageState & {
  setLanguages(languages: ProgrammingLanguage[]): void;
  setCurrentLanguage(currentLanguage: ProgrammingLanguage): void;
  getAllLanguages(): Promise<void>;
};
