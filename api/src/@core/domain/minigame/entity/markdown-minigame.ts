import { MiniGame, MiniGameEnum } from './minigame.entity';

export class MarkdownMiniGame extends MiniGame {
  constructor(
    private _markdown: string,
    private miniGameId: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(MiniGameEnum.MARKDOWN, id, createdAt, updatedAt);
  }

  get markdown(): string {
    return this._markdown;
  }

  toJSON(): any {
    return {
      id: this.miniGameId,
      markdown: this.markdown,
      type: MiniGameEnum.MARKDOWN,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
