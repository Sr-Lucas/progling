import { Module } from '@/core/types/module.types';

export type ModuleState = {
  modules: Module[];
};

export type IModuleStore = ModuleState & {
  getModulesByLanguageId: (id: string) => Promise<void>;
};
