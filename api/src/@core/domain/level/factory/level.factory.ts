import {
  MiniGameFactory,
  MiniGameType,
} from '@domain/minigame/factory/mini-game.factory';
import { Level } from '../entity/level.entity';

type LevelType = {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  miniGames?: MiniGameType[];
};

export class LevelFactory {
  static convertOne(level?: LevelType | null): Level | null {
    if (!level) return null;

    const miniGames = level.miniGames
      ? MiniGameFactory.convertMany(level.miniGames)
      : [];

    return new Level(
      level.name,
      level.description,
      level.id,
      level.createdAt,
      level.updatedAt,
      miniGames,
    );
  }

  static convertMany(levels: LevelType[]): Level[] {
    return levels.map((level) => this.convertOne(level)!);
  }
}
