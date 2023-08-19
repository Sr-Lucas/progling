import { Level } from './level.types';
import { ProgrammingLanguage } from './programming-language.types';

export type Module = {
  id: string;
  name: string;
  description: string;
  levels: Level[];
  programmingLanguage: ProgrammingLanguage;
  createdAt: Date;
  updatedAt: Date;
};
