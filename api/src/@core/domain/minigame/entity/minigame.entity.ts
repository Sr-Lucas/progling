import { Entity } from '@domain/@shared/entity/entity.abstract';
import { CodeOrderingMiniGame } from './code-ordering-minigame';
import { CodeCompletionMiniGame } from './code-completion-minigame';
import { TrueFalseMiniGame } from './true-false-minigame';
import { StudentAnswer } from '@domain/student/entity/student-answer.entity';

export enum MiniGameEnum {
  TRUE_FALSE = 'TRUE_FALSE',
  CODE_COMPLETION = 'CODE_COMPLETION',
  CODE_ORDERING = 'CODE_ORDERING',
}

export class MiniGame extends Entity {
  private _codeCompletion: CodeCompletionMiniGame;
  private _codeOrdering: CodeOrderingMiniGame;
  private _trueFalse: TrueFalseMiniGame;

  private _studentAnswers?: StudentAnswer[] = [];

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

  get stringType(): string {
    return this._type;
  }

  set studentAnswers(studentProgress: StudentAnswer[]) {
    this._studentAnswers = studentProgress;
  }

  get studentAnswers(): StudentAnswer[] | undefined {
    return this._studentAnswers;
  }

  get hasGame(): boolean {
    return !!this.type;
  }

  isCorrectAnswer(answer: string | boolean | number[]): boolean {
    return this.type?.isCorrectAnswer(answer) ?? false;
  }

  toJSON(): any {
    return this.type?.toJSON() ?? undefined;
  }
}
