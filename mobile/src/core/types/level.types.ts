import { AnswerType, MiniGame } from './games.types';

export type Level = {
  id: string;
  name: string;
  description: string;
  miniGames: MiniGame[];
  levelProgress: number;
  numberOfMiniGames: number;
  createdAt: string;
  updatedAt: string;
};
