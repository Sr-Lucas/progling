import { combine } from 'zustand/middleware';
import { ILevelStore, LevelState } from './level-store.types';
import { create } from 'zustand';
import { levelApi } from '@/core/api';
import { Level } from '@/core/types/level.types';
import { Module } from '@/core/types/module.types';

const initialState: LevelState = {
  level: {} as Level,
  module: {} as Module,
};

export const levelStore = combine({ ...initialState }, (set) => ({
  setModule: (module: Module): void => {
    set({ module });
  },
  getLevelById: async (id: string): Promise<void> => {
    const level = await levelApi.findOne(id);

    set({ level });
  },
}));

export const useLevelStore = create<ILevelStore>()(levelStore);
