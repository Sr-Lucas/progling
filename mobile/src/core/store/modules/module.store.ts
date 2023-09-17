import { moduleApi } from '@/core/api';
import { create } from 'zustand';
import { combine, createJSONStorage, persist } from 'zustand/middleware';
import { IModuleStore, ModuleState } from './module-store.types';
import { zustandMMKVStorage } from '@/core/adapters/mmkv.adapter';
import { Module } from '@/core/types/module.types';
import { Level } from '@/core/types/level.types';

const initialState: ModuleState = {
  currentModule: null,
  currentLevel: null,
  modules: [],
  isLoading: false,
};

const moduleStore = persist<IModuleStore>(
  (set) => ({
    ...initialState,
    getModulesByLanguageId: async (id: string): Promise<void> => {
      set({ isLoading: true });
      try {
        const modules = await moduleApi.findByLanguageId(id);
        set({ modules });
      } finally {
        set({ isLoading: false });
      }
    },
    setCurrentModule: (currentModule: Module) => set({ currentModule }),
    setCurrentLevel: (currentLevel: Level) => set({ currentLevel }),
  }),
  {
    name: 'module-storage',
    storage: createJSONStorage(() => zustandMMKVStorage),
  },
);

export const useModuleStore = create<IModuleStore>()(moduleStore);
