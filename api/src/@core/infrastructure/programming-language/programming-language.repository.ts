import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';
import { ProgrammingLanguageFactory } from '@domain/programming-language/factory/programming-language.factory';
import { IProgrammingLanguageRepository } from '@domain/programming-language/repository/programming-language.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class ProgrammingLanguageRepository
  implements IProgrammingLanguageRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<ProgrammingLanguage[]> {
    const programmingLanguages = await this.prisma.programmingLanguage.findMany(
      {
        include: {
          image: true,
        },
      },
    );

    return ProgrammingLanguageFactory.convertMany(programmingLanguages);
  }

  async findById(id: string): Promise<ProgrammingLanguage | null> {
    const programmingLanguage =
      await this.prisma.programmingLanguage.findUnique({
        where: {
          id,
        },
        include: {
          image: true,
        },
      });

    return ProgrammingLanguageFactory.convertOne(programmingLanguage);
  }
}
