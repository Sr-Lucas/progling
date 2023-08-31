import { AnswerGameDTO, AnswerType } from '@/core/types/games.types';

export interface IGameApi {
  submitGameAnswer: (answer: AnswerGameDTO) => void;
}
