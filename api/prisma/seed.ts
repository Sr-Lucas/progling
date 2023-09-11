import { PrismaClient } from '@prisma/client';
import { SeedDevelopment } from './seeder/development.seeder';
import { SeedProduction } from './seeder/production.seeder';
import { BcryptAdapter } from 'src/@core/adapters/encrypter/bcrypt.adapter';

const prisma = new PrismaClient();

async function main() {
  const env = process.env.NODE_ENV || 'development';

  const bcryptAdapter = new BcryptAdapter();

  if (env === 'development') {
    await new SeedDevelopment(prisma, bcryptAdapter).execute();
  }

  if (env === 'production') {
    await new SeedProduction(prisma, bcryptAdapter).execute();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
