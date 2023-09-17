import { PrismaClient } from '@prisma/client';
import * as console from 'console';
import { levels } from './data/levels';
import { images } from './data/images';
import { programmingLanguages } from './data/languages';
import { modules } from './data/modules';
import { students } from './data/students';
import {
  codeCompletionMiniGameOptions,
  codeCompletionMiniGames,
  markDownMiniGames,
  miniGames,
  trueFalseMiniGames,
} from './data/minigames';

export class SeedDevelopment {
  constructor(private readonly prisma: PrismaClient) {}

  async execute(): Promise<void> {
    console.log('Seeding database... [DEV]');

    // CREATE images
    await this.prisma.image.createMany({
      data: images,
      skipDuplicates: true,
    });

    // CREATE programmingLanguages
    await this.prisma.programmingLanguage.createMany({
      data: programmingLanguages,
      skipDuplicates: true,
    });

    // CREATE modules
    await this.prisma.module.createMany({
      data: modules,
      skipDuplicates: true,
    });

    // CREATE levels
    await this.prisma.level.createMany({
      data: levels,
      skipDuplicates: true,
    });

    // CREATE trueFalseMiniGames
    await this.prisma.trueFalseMiniGame.createMany({
      data: trueFalseMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeCompletionMiniGames
    await this.prisma.codeCompletionMiniGame.createMany({
      data: codeCompletionMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeCompletionMiniGameOptions
    await this.prisma.codeCompletionMiniGameOption.createMany({
      data: codeCompletionMiniGameOptions,
      skipDuplicates: true,
    });

    // // CREATE codeOrderingMiniGames
    // await this.prisma.codeOrderingMiniGame.createMany({
    //   data: this.codeOrderingMiniGames,
    //   skipDuplicates: true,
    // });

    // // CREATE codeOrderingMiniGameOptions
    // await this.prisma.codeOrderingMiniGameOption.createMany({
    //   data: this._codeOrderingMiniGameOptions,
    //   skipDuplicates: true,
    // });

    // CREATE MARKDOWN MINIGAMES
    await this.prisma.markdownMiniGame.createMany({
      data: markDownMiniGames,
      skipDuplicates: true,
    });

    // CREATE minigames
    await this.prisma.miniGame.createMany({
      data: miniGames,
      skipDuplicates: true,
    });

    const copyStudents = students;

    for (const student of copyStudents) {
      student.password =
        '$2a$12$SVcymT2MxaeDtjo6OvFS6uUyWOh151OdHheE0CyOvPj6Gml0/zkWq'; // Teste123@
    }

    // CREATE students
    await this.prisma.student.createMany({
      data: copyStudents,
      skipDuplicates: true,
    });

    console.log('Seeding completed!');
  }
}
