import { Entity } from '@domain/@shared/entity/entity.abstract';

export class StudentAnswer extends Entity {
  constructor(
    private _studentId: string,
    private _miniGameId: string,
    private answer: boolean | string | number[],
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  get studentId(): string {
    return this._studentId;
  }

  get miniGameId(): string {
    return this._miniGameId;
  }

  toJSON(): any {
    return {
      id: this.id,
      studentId: this.studentId,
      miniGameId: this.miniGameId,
      answer: this.answer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
