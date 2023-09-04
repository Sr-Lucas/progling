import { Entity } from '@domain/@shared/entity/entity.abstract';

export class Student extends Entity {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _hearts: number,
    private _heartsRenewAt?: Date | null,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get hearts(): number {
    return this._hearts;
  }

  get heartsRenewAt(): Date | null | undefined {
    return this._heartsRenewAt;
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      hearts: this.hearts,
      heartsRenewAt: this.heartsRenewAt,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
