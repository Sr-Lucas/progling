import { MiniGame, MiniGameEnum } from './minigame.entity';
import { CodeOrderingMiniGameOption } from '../object-value/code-ordering-minigame-option';

export class CodeOrderingMiniGame extends MiniGame {
  constructor(
    private _options: CodeOrderingMiniGameOption[],
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

  toJSON(): any {
    return {
      id: this.id,
      options: this.options.map((option) => option.toJSON()),
      type: MiniGameEnum.CODE_ORDERING,
      studentAnswer: this.studentAnswers?.map((answer) => answer.toJSON()),
      correctOrder: this.correctOrder,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
