import { Level } from '@domain/level/entity/level.entity';
import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';
import { Module } from '../entity/module.entity';

type PrismaModuleType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  levels: {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  ProgrammingLanguage: {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export class ModuleFactory {
  static convertOne(module?: PrismaModuleType | null): Module | null {
    if (!module) {
      return null;
    }

    const levels: Level[] = module.levels.map(
      (level) =>
        new Level(
          level.name,
          level.description,
          level.id,
          level.createdAt,
          level.updatedAt,
          [],
        ),
    );

    const programmingLanguage = new ProgrammingLanguage(
      module.ProgrammingLanguage.name,
      module.ProgrammingLanguage.description,
      module.ProgrammingLanguage.id,
      module.ProgrammingLanguage.createdAt,
      module.ProgrammingLanguage.updatedAt,
    );

    return new Module(
      module.name,
      module.description,
      levels,
      programmingLanguage,
      module.id,
      module.createdAt,
      module.updatedAt,
    );
  }

  static convertMany(modules: PrismaModuleType[]): Module[] {
    return modules.map((module) => ModuleFactory.convertOne(module)!);
  }
}
