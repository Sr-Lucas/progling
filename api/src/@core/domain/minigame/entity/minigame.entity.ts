import { Entity } from '@domain/@shared/entity/entity.abstract';
import { CodeOrderingMiniGame } from './code-ordering-minigame';
import { CodeCompletionMiniGame } from './code-completion-minigame';
import { TrueFalseMiniGame } from './true-false-minigame';
import { StudentProgress } from '@domain/student/entity/student-progress.entity';

export enum MiniGameEnum {
  TRUE_FALSE = 'TRUE_FALSE',
  CODE_COMPLETION = 'CODE_COMPLETION',
  CODE_ORDERING = 'CODE_ORDERING',
}

export class MiniGame extends Entity {
  private _codeCompletion: CodeCompletionMiniGame;
  private _codeOrdering: CodeOrderingMiniGame;
  private _trueFalse: TrueFalseMiniGame;

  private _studentProgress?: StudentProgress;

  constructor(
    private _type: MiniGameEnum,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  set codeCompletion(codeCompletion: CodeCompletionMiniGame) {
    this._codeCompletion = codeCompletion;
  }

  set codeOrdering(codeOrdering: CodeOrderingMiniGame) {
    this._codeOrdering = codeOrdering;
  }

  set trueFalse(trueFalse: TrueFalseMiniGame) {
    this._trueFalse = trueFalse;
  }

  get type():
    | CodeCompletionMiniGame
    | CodeOrderingMiniGame
    | TrueFalseMiniGame
    | null {
    if (this._type === MiniGameEnum.TRUE_FALSE) {
      return this._trueFalse;
    }

    if (this._type === MiniGameEnum.CODE_COMPLETION) {
      return this._codeCompletion;
    }

    return this._codeOrdering;
  }

  set studentProgress(studentProgress: StudentProgress) {
    this._studentProgress = studentProgress;
  }

  get studentProgress(): StudentProgress | undefined {
    return this._studentProgress;
  }

  get hasGame(): boolean {
    return !!this.type;
  }

  toJSON(): any {
    return this.type?.toJSON() ?? undefined;
  }
}
