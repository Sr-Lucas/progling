import { Level } from './level.types';
import { ProgrammingLanguage } from './programming-language.types';

export type Module = {
  id: string;
  name: string;
  doneLevels: number;
  numberOfLevels: number;
  description: string;
  levels: Level[];
  programmingLanguage: ProgrammingLanguage;
  createdAt: string;
  updatedAt: string;
};
