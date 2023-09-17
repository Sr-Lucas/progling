import {
  FindAllModulesByProgrammingLanguageDTO,
  FindModuleByIdDTO,
} from '@domain/module/dto/module.dto';
import { Module } from '@domain/module/entity/module.entity';
import { ModuleFactory } from '@domain/module/factory/module.factory';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class ModuleRepository implements IModuleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByProgrammingLanguageId({
    programmingLanguageId,
    userId,
  }: FindAllModulesByProgrammingLanguageDTO): Promise<Module[]> {
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
          orderBy: {
            orderNumber: 'asc',
          },
          include: {
            miniGames: {
              orderBy: {
                orderNumber: 'asc',
              },
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
      orderBy: {
        orderNumber: 'asc',
      },
      include: {
        levels: {
          orderBy: {
            orderNumber: 'asc',
          },
          include: {
            miniGames: {
              orderBy: {
                orderNumber: 'asc',
              },
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

  async findById({ id, userId }: FindModuleByIdDTO): Promise<Module | null> {
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
