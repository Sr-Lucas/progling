import { PrismaClient } from '@prisma/client';
import { IEncrypter } from 'src/@core/adapters/encrypter/encrypter.interface';

export class SeedProduction {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly encrypter: IEncrypter,
  ) {}

  async execute(): Promise<void> {
    console.log('SeedProduction');
  }
}
