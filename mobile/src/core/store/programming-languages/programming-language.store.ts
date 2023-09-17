import { create } from 'zustand';
import {
  IProgrammingLanguageStore,
  ProgrammingLanguageState,
} from './programming-language-store.types';
import { combine } from 'zustand/middleware';
import { ProgrammingLanguage } from '@/core/types/programming-language.types';
import { programmingLanguageApi } from '@/core/api';

export const initialState: ProgrammingLanguageState = {
  languages: [],
  currentLanguage: null,
};

export const programmingLanguageStore = combine({ ...initialState }, (set) => ({
  async getAllLanguages() {
    const languages = await programmingLanguageApi.findAll();
    set({ languages });
  },
  async getOneLanguageById(id: string) {
    const currentLanguage = await programmingLanguageApi.findOne(id);
    set({ currentLanguage });
    return currentLanguage;
  },
  setLanguages(languages: ProgrammingLanguage[]) {
    set({ languages });
  },
  setCurrentLanguage(currentLanguage: ProgrammingLanguage) {
    set({ currentLanguage });
  },
}));

export const useProgrammingLanguageStore = create<IProgrammingLanguageStore>()(
  programmingLanguageStore,
);
