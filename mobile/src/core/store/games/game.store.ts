import { combine } from 'zustand/middleware';
import { GameState, IGameStore } from './game-store.types';
import { create } from 'zustand';
import { AnswerType, MiniGame } from '@/core/types/games.types';
import { gameApi } from '@/core/api';

const initialState: GameState = {
  games: [],
  currentGame: null,
  hearts: 0,
};

export const gameStore = combine({ ...initialState }, (set, get) => ({
  submitGameAnswer: async (answer: AnswerType) => {
    const { currentGame } = get();

    if (currentGame) {
      await gameApi.submitGameAnswer({
        answer,
        gameId: currentGame.id,
      });
    }
  },
  deleteAllAnswersByLevelId: async (levelId: string) => {
    await gameApi.deleteAllAnswersByLevelId({ levelId });
  },
  setGames(games: MiniGame[]) {
    set({ games });
  },
  setCurrentGame(currentGame: MiniGame) {
    set({ currentGame });
  },
  setHearts(hearts: number) {
    set({ hearts });
  },
  resolveGameNavigationByGameType(gameType: string) {
    switch (gameType) {
      case 'TrueFalseGame':
        return '/levels/games/TrueFalseGame';
      default:
        return '/levels/games/TrueFalseGame';
    }
  },
}));

export const useGameStore = create<IGameStore>()(gameStore);
