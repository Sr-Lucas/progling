import { Level } from '@/core/types/level.types';
import { Module } from '@/core/types/module.types';

export type ModuleState = {
  isLoading: boolean;
  currentModule: Module | null;
  currentLevel: Level | null;
  modules: Module[];
};

export type IModuleStore = ModuleState & {
  getModulesByLanguageId: (id: string) => Promise<void>;
  setCurrentModule: (currentModule: Module) => void;
  setCurrentLevel: (currentLevel: Level) => void;
};
