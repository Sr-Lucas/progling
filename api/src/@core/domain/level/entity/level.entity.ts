import { Entity } from '@domain/@shared/entity/entity.abstract';
import { MiniGame } from '@domain/minigame/entity/minigame.entity';

export class Level extends Entity {
  constructor(
    private _name: string,
    private _description: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    private _miniGames?: MiniGame[],
  ) {
    super(id, createdAt, updatedAt);
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get miniGames(): MiniGame[] {
    return this._miniGames ?? [];
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      miniGames: this.miniGames.map((miniGame) => miniGame.toJSON()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
