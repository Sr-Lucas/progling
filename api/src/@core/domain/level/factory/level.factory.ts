import {
  MiniGameFactory,
  MiniGameType,
} from '@domain/minigame/factory/mini-game.factory';
import { Level } from '../entity/level.entity';
import { StudentLevelProgressFactory } from '@domain/student/factory/student-level-progress.factory';

export type LevelType = {
  id: string;
  name: string;
  description: string;
  miniGames?: MiniGameType[];
  studentLevelProgress?: {
    id: string;
    studentId: string;
    levelId: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
  createdAt: Date;
  updatedAt: Date;
};

export class LevelFactory {
  static convertOne(level?: LevelType | null): Level | null {
    if (!level) return null;

    const miniGames = level.miniGames
      ? MiniGameFactory.convertMany(level.miniGames)
      : [];

    const lvl = new Level(
      level.name,
      level.description,
      level.id,
      level.createdAt,
      level.updatedAt,
      miniGames,
    );

    if (level.studentLevelProgress && level.studentLevelProgress.length > 0) {
      lvl.studentLevelProgress = StudentLevelProgressFactory.convertOne(
        level.studentLevelProgress[0],
      );
    }

    return lvl;
  }

  static convertMany(levels: LevelType[]): Level[] {
    return levels.map((level) => this.convertOne(level)!);
  }
}
