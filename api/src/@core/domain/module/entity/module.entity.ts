import { Entity } from '@domain/@shared/entity/entity.abstract';
import { Level } from '@domain/level/entity/level.entity';
import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';

export class Module extends Entity {
  constructor(
    private _name: string,
    private _description: string,
    private _levels: Level[],
    private _programmingLanguage: ProgrammingLanguage,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
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

  get levels(): Level[] {
    return this._levels;
  }

  get programmingLanguage(): ProgrammingLanguage {
    return this._programmingLanguage;
  }

  get moduleProgress(): number {
    return this.levels.reduce((acc, level) => {
      if ((level.miniGames?.length ?? 0) > 0) {
        return acc + 1;
      }

      return acc;
    }, 0);
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      doneLevels: this.moduleProgress,
      numberOfLevels: this.levels.length,
      description: this.description,
      levels: this.levels.map((level) => level.toJSON()),
      programmingLanguage: this.programmingLanguage,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
