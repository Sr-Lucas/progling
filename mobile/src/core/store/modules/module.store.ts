import { moduleApi } from '@/core/api';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { IModuleStore, ModuleState } from './module-store.types';

const initialState: ModuleState = {
  modules: [],
};

const moduleStore = combine({ ...initialState }, (set) => ({
  getModulesByLanguageId: async (id: string): Promise<void> => {
    const modules = await moduleApi.findByLanguageId(id);

    set({ modules });
  },
}));

export const useModuleStore = create<IModuleStore>()(moduleStore);
