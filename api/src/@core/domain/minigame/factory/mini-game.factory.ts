import { StudentProgress } from '@prisma/client';
import { CodeCompletionMiniGame } from '../entity/code-completion-minigame';
import { CodeOrderingMiniGame } from '../entity/code-ordering-minigame';
import { MiniGame, MiniGameEnum } from '../entity/minigame.entity';
import { TrueFalseMiniGame } from '../entity/true-false-minigame';
import { CodeCompletionMiniGameOption } from '../object-value/code-completion-minigame-option';
import { CodeOrderingMiniGameOption } from '../object-value/code-ordering-minigame-option';
import { StudentProgressFactory } from '@domain/student/factory/student-progress.factory';

export type MiniGameType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  type: string;
  TrueFalseMiniGame?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    question: string;
    correctAnswer: boolean;
  } | null;
  CodeCompletionMiniGame?: {
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
  CodeOrderingMiniGame?: {
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
  StudentProgress?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    studentId: string;
    miniGameId: string;
    correct: boolean;
  }[];
};

export class MiniGameFactory {
  static convertOne(miniGame?: MiniGameType | null): MiniGame | null {
    if (!miniGame) return null;

    let miniGameO: MiniGame | null = null;

    if (miniGame.TrueFalseMiniGame) {
      miniGameO = new MiniGame(
        MiniGameEnum.TRUE_FALSE,
        miniGame.id,
        miniGame.createdAt,
        miniGame.updatedAt,
      );

      const trueFalseGame = new TrueFalseMiniGame(
        miniGame.TrueFalseMiniGame.question,
        miniGame.TrueFalseMiniGame.correctAnswer,
        miniGame.TrueFalseMiniGame.id,
        miniGame.TrueFalseMiniGame.createdAt,
        miniGame.TrueFalseMiniGame.updatedAt,
      );

      if (miniGame.StudentProgress && miniGame.StudentProgress.length > 0) {
        trueFalseGame.studentProgress = StudentProgressFactory.convertOne(
          miniGame.StudentProgress.at(0),
        )!;
      }

      miniGameO.trueFalse = trueFalseGame;
    }

    if (miniGame.CodeCompletionMiniGame) {
      miniGameO = new MiniGame(
        MiniGameEnum.CODE_COMPLETION,
        miniGame.id,
        miniGame.createdAt,
        miniGame.updatedAt,
      );

      const options: CodeCompletionMiniGameOption[] =
        miniGame.CodeCompletionMiniGame.options.map(
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
        miniGame.CodeCompletionMiniGame.code,
        options,
        miniGame.CodeCompletionMiniGame.id,
        miniGame.CodeCompletionMiniGame.createdAt,
        miniGame.CodeCompletionMiniGame.updatedAt,
      );

      if (miniGame.StudentProgress && miniGame.StudentProgress.length > 0) {
        codeCompletion.studentProgress = StudentProgressFactory.convertOne(
          miniGame.StudentProgress.at(0),
        )!;
      }

      miniGameO.codeCompletion = codeCompletion;
    }

    if (miniGame.CodeOrderingMiniGame) {
      const options: CodeOrderingMiniGameOption[] =
        miniGame.CodeOrderingMiniGame.options.map(
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
        miniGame.CodeOrderingMiniGame.id,
        miniGame.CodeOrderingMiniGame.createdAt,
        miniGame.CodeOrderingMiniGame.updatedAt,
      );

      if (miniGame.StudentProgress && miniGame.StudentProgress.length > 0) {
        codeOrderingMiniGame.studentProgress =
          StudentProgressFactory.convertOne(miniGame.StudentProgress.at(0))!;
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

    if (miniGame.StudentProgress && miniGame.StudentProgress.length > 0) {
      miniGameO.studentProgress = StudentProgressFactory.convertOne(
        miniGame.StudentProgress.at(0),
      )!;
    }

    return miniGameO!;
  }

  static convertMany(miniGames: MiniGameType[]): MiniGame[] {
    return miniGames.map((miniGame) => this.convertOne(miniGame)!);
  }
}
