import { Entity } from '@domain/@shared/entity/entity.abstract';

export class CodeOrderingMiniGameOption extends Entity {
  constructor(
    private _content: string,
    private _order: number,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  get content(): string {
    return this._content;
  }

  get order(): number {
    return this._order;
  }

  toJSON(): any {
    return {
      id: this.id,
      content: this.content,
      order: this.order,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
