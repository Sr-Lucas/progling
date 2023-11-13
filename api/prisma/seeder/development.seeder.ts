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
  codeOrderingMiniGameOptions,
  codeOrderingMiniGames,
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
    console.log('Languages: --------------------------------------');
    console.log(programmingLanguages);
    console.log('Languages: --------------------------------------');
    await this.prisma.programmingLanguage.createMany({
      data: programmingLanguages,
      skipDuplicates: true,
    });

    // CREATE modules
    console.log('Modules: --------------------------------------');
    console.log(modules);
    console.log('Modules: --------------------------------------');
    await this.prisma.module.createMany({
      data: modules,
      skipDuplicates: true,
    });

    // CREATE levels
    console.log('Levels: --------------------------------------');
    console.log(levels);
    console.log('Levels: --------------------------------------');
    await this.prisma.level.createMany({
      data: levels,
      skipDuplicates: true,
    });

    // CREATE trueFalseMiniGames
    console.log('TrueFalse: --------------------------------------');
    console.log(trueFalseMiniGames);
    console.log('TrueFalse: --------------------------------------');
    await this.prisma.trueFalseMiniGame.createMany({
      data: trueFalseMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeCompletionMiniGames
    console.log('CodeCompletion: --------------------------------------');
    console.log(codeCompletionMiniGames);
    console.log('CodeCompletion: --------------------------------------');
    await this.prisma.codeCompletionMiniGame.createMany({
      data: codeCompletionMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeCompletionMiniGameOptions
    await this.prisma.codeCompletionMiniGameOption.createMany({
      data: codeCompletionMiniGameOptions,
      skipDuplicates: true,
    });

    // CREATE codeOrderingMiniGames
    await this.prisma.codeOrderingMiniGame.createMany({
      data: codeOrderingMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeOrderingMiniGameOptions
    await this.prisma.codeOrderingMiniGameOption.createMany({
      data: codeOrderingMiniGameOptions,
      skipDuplicates: true,
    });

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
