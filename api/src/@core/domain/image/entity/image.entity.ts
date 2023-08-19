import { Entity } from '@domain/@shared/entity/entity.abstract';
import { StorageTypeEnum } from '../enum/storage-type';

export class Image extends Entity {
  constructor(
    private _name: string,
    private _storeType: StorageTypeEnum,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(id, createdAt, updatedAt);
  }

  get name(): string {
    return this._name;
  }

  get storeType(): string {
    return this._storeType;
  }

  get url(): string {
    if (this._storeType === StorageTypeEnum.local) {
      return `${process.env.STORAGE_LOCAL_URL}/${this._name}`;
    }

    return `${process.env.STORAGE_S3_URL}/${this._name}`;
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      url: this.url,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
