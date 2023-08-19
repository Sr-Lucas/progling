import { MiniGame } from "./games.types";

export type Level = {
  id: string,
  name: string,
  description: string,
  miniGames: MiniGame[],
  createdAt: Date,
  updatedAt: Date,
}