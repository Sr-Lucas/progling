import { Entity } from '@domain/@shared/entity/entity.abstract';
import { CodeCompletionMiniGame } from '../entity/code-completion-minigame';

export class CodeCompletionMiniGameOption extends Entity {
  constructor(
    private _content: string,
    private _isCorrect: boolean,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  get content(): string {
    return this._content;
  }

  get isCorrect(): boolean {
    return this._isCorrect;
  }

  toJSON(): any {
    return {
      id: this.id,
      content: this.content,
      isCorrect: this.isCorrect,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
