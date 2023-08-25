import { Entity } from '@domain/@shared/entity/entity.abstract';
import { MiniGame } from '@domain/minigame/entity/minigame.entity';
import { StudentLevelProgress } from '@domain/student/entity/student-level-progress.entity';

export class Level extends Entity {
  private _studentLevelProgress?: StudentLevelProgress;

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

  set studentLevelProgress(studentLevelProgress: StudentLevelProgress) {
    this._studentLevelProgress = studentLevelProgress;
  }

  getStudentLevelProgress(): number {
    return this._studentLevelProgress?.getLevelProgress(this.miniGames) ?? 0;
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
      levelProgress: this.getStudentLevelProgress(),
      miniGames: miniGames,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
