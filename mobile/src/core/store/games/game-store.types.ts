import { AnswerType, MiniGame } from '@/core/types/games.types';
import { Level } from '@/core/types/level.types';

export type GameState = {
  games: MiniGame[];
  currentGame: MiniGame | null;
  hearts: number;
};

export type GameRoutes =
  | '/levels/games/TrueFalseGame'
  | '/levels/games/CodeCompletionGame'
  | '/levels/games/MarkdownGame';

export type IGameStore = GameState & {
  setGames(games: MiniGame[]): void;
  setCurrentGame(game: MiniGame): void;
  deleteAllAnswersByLevelId(levelId: string): Promise<void>;
  resolveGameNavigationByGameType(gameType: string): GameRoutes;
  submitGameAnswer(answer: AnswerType): Promise<void>;
  setHearts(hearts: number): void;
};
