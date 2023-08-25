import {
  FindAllByProgrammingLanguageDTO,
  FindByIdDTO,
} from '@domain/module/dto/find-all-by-programming-language.dto';
import { Module } from '@domain/module/entity/module.entity';
import { ModuleFactory } from '@domain/module/factory/module.factory';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class ModuleRepository implements IModuleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByProgrammingLanguageId({
    programmingLanguageId,
    userId,
  }: FindAllByProgrammingLanguageDTO): Promise<Module[]> {
    const modules = await this.prisma.module.findMany({
      orderBy: {
        orderNumber: 'asc',
      },
      where: {
        programmingLanguage: {
          id: programmingLanguageId,
        },
      },
      include: {
        levels: {
          include: {
            miniGames: {
              include: {
                studentAnswers: true,
              },
              where: {
                studentAnswers: {
                  some: {
                    studentId: userId,
                  },
                },
              },
            },
          },
        },
        programmingLanguage: {
          include: {
            image: true,
          },
        },
      },
    });

    return ModuleFactory.convertMany(modules);
  }

  async findAll(userId: string): Promise<Module[]> {
    const modules = await this.prisma.module.findMany({
      include: {
        levels: {
          include: {
            miniGames: {
              include: {
                studentAnswers: true,
              },
              where: {
                studentAnswers: {
                  some: {
                    studentId: userId,
                  },
                },
              },
            },
          },
        },
        programmingLanguage: {
          include: {
            image: true,
          },
        },
      },
    });

    return ModuleFactory.convertMany(modules);
  }

  async findById({ id, userId }: FindByIdDTO): Promise<Module | null> {
    const module = await this.prisma.module.findUnique({
      where: {
        id,
      },
      include: {
        levels: {
          include: {
            miniGames: {
              include: {
                studentAnswers: true,
              },
              where: {
                studentAnswers: {
                  some: {
                    studentId: userId,
                  },
                },
              },
            },
          },
        },
        programmingLanguage: {
          include: {
            image: true,
          },
        },
      },
    });

    return ModuleFactory.convertOne(module);
  }
}
