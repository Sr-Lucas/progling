import { AnswerGameDTO, AnswerType } from '@/core/types/games.types';
import { IGameApi } from './game.interface';
import request from '../request';

export type DeleteAllGameAnswerByLevelDTO = {
  levelId: string;
};

export class GameApi implements IGameApi {
  async submitGameAnswer({ answer, gameId }: AnswerGameDTO) {
    const response = await request.post(
      `/mini-games/${gameId}/register-answer`,
      {
        answer,
      },
    );

    return response.data;
  }

  async deleteAllAnswersByLevelId({ levelId }: DeleteAllGameAnswerByLevelDTO) {
    const response = await request.delete(
      `/mini-games/levels/${levelId}/delete-answer`,
    );

    return response.data;
  }
}
