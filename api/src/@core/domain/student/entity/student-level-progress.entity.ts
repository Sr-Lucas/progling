import { Entity } from '@domain/@shared/entity/entity.abstract';
import { MiniGame } from '@domain/minigame/entity/minigame.entity';

export class StudentLevelProgress extends Entity {
  constructor(
    private _studentId: string,
    private _levelId: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  get studentId(): string {
    return this._studentId;
  }

  get levelId(): string {
    return this._levelId;
  }

  getLevelProgress(miniGames: MiniGame[]): number {
    return miniGames.reduce((acc, miniGame) => {
      if (miniGame.studentProgress) {
        return acc + 1;
      }

      return acc;
    }, 0);
  }

  toJSON(): any {
    return {
      id: this.id,
      studentId: this.studentId,
      levelId: this.levelId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
