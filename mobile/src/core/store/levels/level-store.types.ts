import { Level } from '@/core/types/level.types';
import { Module } from '@/core/types/module.types';

export type LevelState = {
  level: Level;
  module: Module;
};

export type ILevelStore = LevelState & {
  setModule: (level: Module) => void;
  getLevelById: (id: string) => Promise<void>;
};
