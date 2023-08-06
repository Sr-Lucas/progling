import { Module } from '@domain/module/entity/module.entity';
import { ModuleFactory } from '@domain/module/factory/module.factory';
import { IModuleRepository } from '@domain/module/repository/module.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class ModuleRepository implements IModuleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAllByProgrammingLanguageId(id: string): Promise<Module[]> {
    const modules = await this.prisma.module.findMany({
      where: {
        ProgrammingLanguage: {
          id,
        },
      },
      include: {
        levels: true,
        ProgrammingLanguage: true,
      },
    });

    return ModuleFactory.convertMany(modules);
  }

  async findAll(): Promise<Module[]> {
    const modules = await this.prisma.module.findMany({
      include: {
        levels: true,
        ProgrammingLanguage: true,
      },
    });

    return ModuleFactory.convertMany(modules);
  }

  async findById(id: string): Promise<Module | null> {
    const module = await this.prisma.module.findUnique({
      where: {
        id,
      },
      include: {
        levels: true,
        ProgrammingLanguage: true,
      },
    });

    return ModuleFactory.convertOne(module);
  }
}
