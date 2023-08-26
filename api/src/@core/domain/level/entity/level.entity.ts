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

  calculateLevelProgress(miniGames: MiniGame[]): number {
    return miniGames.reduce((acc, miniGame) => {
      if (miniGame.studentAnswers) {
        return acc + 1;
      }

      return acc;
    }, 0);
  }

  toJSON(): any {
    const miniGames: MiniGame[] = [];

    this.miniGames.forEach((miniGame) => {
      if (miniGame.hasGame) {
        miniGames.push(miniGame.toJSON());
      }
    });

    return {
      id: this.id,
      name: this.name,
      description: this.description,
      numberOfMiniGames: this._miniGames?.length ?? 0,
      levelProgress: this.calculateLevelProgress(this._miniGames ?? []) ?? 0,
      miniGames: miniGames,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
