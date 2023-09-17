import { MiniGame, MiniGameEnum } from './minigame.entity';

export class MarkdownMiniGame extends MiniGame {
  constructor(
    private _markdownText: string,
    private miniGameId: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(MiniGameEnum.MARKDOWN, id, createdAt, updatedAt);
  }

  toJSON(): any {
    return {
      id: this.miniGameId,
      markdown: this._markdownText,
      type: MiniGameEnum.MARKDOWN,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
