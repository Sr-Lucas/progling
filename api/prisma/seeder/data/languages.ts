import { ProgrammingLanguage } from '@prisma/client';
import { images } from './images';

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    name: 'JavaScript',
    description: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '7506837e-3f60-4b11-99a0-98f131854999',
    imageId: images[0].id,
  },
  {
    name: 'Python',
    description: '',
    imageId: images[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'e9a47ab3-5588-4c21-ad3e-aeff0e6fb6f3',
  },
];
