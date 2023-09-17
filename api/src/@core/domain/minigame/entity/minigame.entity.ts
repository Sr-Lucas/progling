import { Entity } from '@domain/@shared/entity/entity.abstract';
import { CodeOrderingMiniGame } from './code-ordering-minigame';
import { CodeCompletionMiniGame } from './code-completion-minigame';
import { TrueFalseMiniGame } from './true-false-minigame';
import { StudentAnswer } from '@domain/student/entity/student-answer.entity';
import { Level } from '@domain/level/entity/level.entity';
import { MarkdownMiniGame } from './markdown-minigame';

export enum MiniGameEnum {
  TRUE_FALSE = 'TRUE_FALSE',
  CODE_COMPLETION = 'CODE_COMPLETION',
  CODE_ORDERING = 'CODE_ORDERING',
  MARKDOWN = 'MARKDOWN',
}

export class MiniGame extends Entity {
  private _codeCompletion: CodeCompletionMiniGame;
  private _codeOrdering: CodeOrderingMiniGame;
  private _trueFalse: TrueFalseMiniGame;
  private _markdown: MarkdownMiniGame;
  private _level?: Level | null;

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

  set markdown(markdown: MarkdownMiniGame) {
    this._markdown = markdown;
  }

  get type():
    | CodeCompletionMiniGame
    | CodeOrderingMiniGame
    | TrueFalseMiniGame
    | MarkdownMiniGame
    | null {
    if (this._type === MiniGameEnum.TRUE_FALSE) {
      return this._trueFalse;
    }

    if (this._type === MiniGameEnum.CODE_COMPLETION) {
      return this._codeCompletion;
    }

    if (this._type === MiniGameEnum.MARKDOWN) {
      return this._markdown;
    }

    return this._codeOrdering;
  }

  get stringType(): string {
    return this._type;
  }

  get level(): Level | null | undefined {
    return this._level;
  }

  set level(level: Level | null | undefined) {
    this._level = level;
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
