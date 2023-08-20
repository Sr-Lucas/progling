import { MiniGame } from './games.types';

export type Level = {
  id: string;
  name: string;
  description: string;
  miniGames: MiniGame[];
  createdAt: string;
  updatedAt: string;
};
