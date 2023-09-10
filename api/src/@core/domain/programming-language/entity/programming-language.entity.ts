import { Entity } from '@domain/@shared/entity/entity.abstract';
import { Image } from '@domain/image/entity/image.entity';

export class ProgrammingLanguage extends Entity {
  private _progression: number;

  constructor(
    private _name: string,
    private _description: string,
    private _image: Image,
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

  get imageUrl(): string {
    return this._image.url;
  }

  get progression(): number {
    return this._progression ?? 0;
  }

  set progression(progression: number) {
    this._progression = progression;
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      progression: this.progression,
      imageUrl: this.imageUrl,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
