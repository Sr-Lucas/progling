import { Image } from '../entity/image.entity';
import { StorageTypeEnum } from '../enum/storage-type';

type ImageType = {
  id: string;
  name: string;
  storeType: string;
  createdAt: Date;
  updatedAt: Date;
};

export class ImageFactory {
  static convertOne(image?: ImageType | null): Image | null {
    if (!image) return null;

    return new Image(
      image.name,
      image.storeType as StorageTypeEnum,
      image.id,
      image.createdAt,
      image.updatedAt,
    );
  }

  static convertMany(images: ImageType[]): Image[] {
    return images.map((image) => this.convertOne(image)!);
  }
}
