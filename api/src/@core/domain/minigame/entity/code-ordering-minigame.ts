import { MiniGame, MiniGameEnum } from './minigame.entity';
import { CodeOrderingMiniGameOption } from '../object-value/code-ordering-minigame-option';

export class CodeOrderingMiniGame extends MiniGame {
  constructor(
    private _options: CodeOrderingMiniGameOption[],
    private miniGameId: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(MiniGameEnum.CODE_ORDERING, id, createdAt, updatedAt);
  }

  get correctOrder(): number[] {
    return this._options
      .sort((a, b) => a.order - b.order)
      .map((option) => option.order);
  }

  get options(): CodeOrderingMiniGameOption[] {
    return this._options;
  }

  isCorrectAnswer(answer: string | boolean | number[]): boolean {
    const order = answer as number[];

    return this.correctOrder.every((correctOrder, index) => {
      return correctOrder === order[index];
    });
  }

  toJSON(): any {
    return {
      id: this.miniGameId,
      options: this.options.map((option) => option.toJSON()),
      type: MiniGameEnum.CODE_ORDERING,
      studentAnswers: this.studentAnswers?.map((answer) => answer.toJSON()),
      correctOrder: this.correctOrder,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
