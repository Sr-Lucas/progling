import { Level } from '@domain/level/entity/level.entity';
import { ProgrammingLanguage } from '@domain/programming-language/entity/programming-language.entity';
import { Module } from '../entity/module.entity';
import { ImageFactory } from '@domain/image/factory/image.factory';
import { StudentLevelProgressFactory } from '@domain/student/factory/student-level-progress.factory';
import { MiniGameFactory } from '@domain/minigame/factory/mini-game.factory';
import { LevelType } from '@domain/level/factory/level.factory';

type PrismaModuleType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  levels: LevelType[];
  ProgrammingLanguage: {
    id: string;
    name: string;
    image: {
      id: string;
      name: string;
      storeType: string;
      createdAt: Date;
      updatedAt: Date;
    };
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

    const levels: Level[] = module.levels.map((level) => {
      const lvl = new Level(
        level.name,
        level.description,
        level.id,
        level.createdAt,
        level.updatedAt,
        MiniGameFactory.convertMany(level.miniGames ?? []),
      );

      if (
        level.StudentLevelProgress &&
        level.StudentLevelProgress.length === 1
      ) {
        lvl.studentLevelProgress = StudentLevelProgressFactory.convertOne(
          level.StudentLevelProgress[0],
        );
      } else if ((level.StudentLevelProgress?.length ?? 0) > 1) {
        throw new Error('Level has more than one StudentLevelProgress');
      }

      return lvl;
    });

    const programmingLanguage = new ProgrammingLanguage(
      module.ProgrammingLanguage.name,
      module.ProgrammingLanguage.description,
      ImageFactory.convertOne(module.ProgrammingLanguage.image)!,
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
