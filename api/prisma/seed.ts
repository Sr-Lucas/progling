import { PrismaClient } from '@prisma/client';
import { SeedDevelopment } from './seeder/development.seeder';
import { SeedProduction } from './seeder/production.seeder';

const prisma = new PrismaClient();

async function main() {
  const env = process.env.NODE_ENV || 'development';

  if (env === 'development') {
    await new SeedDevelopment(prisma).execute();
  }

  if (env === 'production') {
    await new SeedProduction(prisma).execute();
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
