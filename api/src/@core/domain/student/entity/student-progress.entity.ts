import { Entity } from '@domain/@shared/entity/entity.abstract';

export class StudentProgress extends Entity {
  constructor(
    private _studentId: string,
    private _miniGameId: string,
    private _correct: boolean,
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

  get correct(): boolean {
    return this._correct;
  }

  toJSON(): any {
    return {
      id: this.id,
      studentId: this.studentId,
      miniGameId: this.miniGameId,
      correct: this.correct,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
