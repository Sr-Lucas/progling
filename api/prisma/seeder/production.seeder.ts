import { PrismaClient } from '@prisma/client';

export class SeedProduction {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(): Promise<void> {
    console.log('SeedProduction');
  }
}
