import { Level } from '@domain/level/entity/level.entity';
import { MiniGame, MiniGameEnum } from './minigame.entity';
import { CodeCompletionMiniGameOption } from '../object-value/code-completion-minigame-option';

export class CodeCompletionMiniGame extends MiniGame {
  constructor(
    private _code: string,
    private _options: CodeCompletionMiniGameOption[],
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(MiniGameEnum.CODE_COMPLETION, id, createdAt, updatedAt);
  }

  get code(): string {
    return this._code;
  }

  get options(): CodeCompletionMiniGameOption[] {
    return this._options;
  }

  toJSON(): any {
    return {
      id: this.id,
      code: this.code,
      options: this.options.map((option) => option.toJSON()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
