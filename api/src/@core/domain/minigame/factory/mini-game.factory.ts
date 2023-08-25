import {
  StudentAnswerFactory,
  StudentAnswerType,
} from '@domain/student/factory/student-answer.factory';
import { CodeCompletionMiniGame } from '../entity/code-completion-minigame';
import { CodeOrderingMiniGame } from '../entity/code-ordering-minigame';
import { MiniGame, MiniGameEnum } from '../entity/minigame.entity';
import { TrueFalseMiniGame } from '../entity/true-false-minigame';
import { CodeCompletionMiniGameOption } from '../object-value/code-completion-minigame-option';
import { CodeOrderingMiniGameOption } from '../object-value/code-ordering-minigame-option';

export type MiniGameType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  trueFalseMiniGame?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    question: string;
    correctAnswer: boolean;
  } | null;
  codeCompletionMiniGame?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    code: string;
    options: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      content: string;
      isCorrect: boolean;
    }[];
  } | null;
  codeOrderingMiniGame?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    options: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      content: string;
      order: number;
    }[];
  } | null;
  studentAnswers?: StudentAnswerType[];
};

export class MiniGameFactory {
  static convertOne(miniGame?: MiniGameType | null): MiniGame | null {
    if (!miniGame) return null;

    let miniGameO: MiniGame | null = null;

    if (miniGame.trueFalseMiniGame) {
      miniGameO = new MiniGame(
        MiniGameEnum.TRUE_FALSE,
        miniGame.id,
        miniGame.createdAt,
        miniGame.updatedAt,
      );

      const trueFalseGame = new TrueFalseMiniGame(
        miniGame.trueFalseMiniGame.question,
        miniGame.trueFalseMiniGame.correctAnswer,
        miniGame.trueFalseMiniGame.id,
        miniGame.trueFalseMiniGame.createdAt,
        miniGame.trueFalseMiniGame.updatedAt,
      );

      if (miniGame.studentAnswers && miniGame.studentAnswers.length > 0) {
        trueFalseGame.studentAnswers = StudentAnswerFactory.convertMany(
          miniGame.studentAnswers,
        );
      }

      miniGameO.trueFalse = trueFalseGame;
    }

    if (miniGame.codeCompletionMiniGame) {
      miniGameO = new MiniGame(
        MiniGameEnum.CODE_COMPLETION,
        miniGame.id,
        miniGame.createdAt,
        miniGame.updatedAt,
      );

      const options: CodeCompletionMiniGameOption[] =
        miniGame.codeCompletionMiniGame.options.map(
          (option) =>
            new CodeCompletionMiniGameOption(
              option.content,
              option.isCorrect,
              option.id,
              option.createdAt,
              option.updatedAt,
            ),
        );

      const codeCompletion = new CodeCompletionMiniGame(
        miniGame.codeCompletionMiniGame.code,
        options,
        miniGame.codeCompletionMiniGame.id,
        miniGame.codeCompletionMiniGame.createdAt,
        miniGame.codeCompletionMiniGame.updatedAt,
      );

      if (miniGame.studentAnswers && miniGame.studentAnswers.length > 0) {
        codeCompletion.studentAnswers = StudentAnswerFactory.convertMany(
          miniGame.studentAnswers,
        )!;
      }

      miniGameO.codeCompletion = codeCompletion;
    }

    if (miniGame.codeOrderingMiniGame) {
      const options = miniGame.codeOrderingMiniGame.options.map(
        (option) =>
          new CodeOrderingMiniGameOption(
            option.content,
            option.order,
            option.id,
            option.createdAt,
            option.updatedAt,
          ),
      );

      const codeOrderingMiniGame = new CodeOrderingMiniGame(
        options,
        miniGame.codeOrderingMiniGame.id,
        miniGame.codeOrderingMiniGame.createdAt,
        miniGame.codeOrderingMiniGame.updatedAt,
      );

      if (miniGame.studentAnswers && miniGame.studentAnswers.length > 0) {
        codeOrderingMiniGame.studentAnswers = StudentAnswerFactory.convertMany(
          miniGame.studentAnswers,
        )!;
      }

      miniGameO = new MiniGame(
        MiniGameEnum.CODE_ORDERING,
        miniGame.id,
        miniGame.createdAt,
        miniGame.updatedAt,
      );

      miniGameO.codeOrdering = codeOrderingMiniGame;
    }

    if (!miniGameO) {
      miniGameO = new MiniGame(
        miniGame.type as MiniGameEnum,
        miniGame.id,
        miniGame.createdAt,
      );
    }

    if (miniGame.studentAnswers && miniGame.studentAnswers.length > 0) {
      miniGameO.studentAnswers = StudentAnswerFactory.convertMany(
        miniGame.studentAnswers,
      )!;
    }

    return miniGameO!;
  }

  static convertMany(miniGames: MiniGameType[]): MiniGame[] {
    return miniGames.map((miniGame) => this.convertOne(miniGame)!);
  }
}
