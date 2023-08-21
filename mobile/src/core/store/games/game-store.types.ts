import { MiniGame } from '@/core/types/games.types';

export type GameState = {
  games: MiniGame[];
  currentGame: MiniGame | null;
};

export type GameRoutes = '/games/TrueFalseGame';

export type IGameStore = GameState & {
  setGames(games: MiniGame[]): void;
  setCurrentGame(game: MiniGame): void;
  resolveGameNavigationByGameType(gameType: string): GameRoutes;
};
