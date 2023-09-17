import { MarkdownMiniGame, MiniGame, TrueFalseMiniGame } from '@prisma/client';
import { levels } from '../levels';
import { module2Mds } from './makdowns/module2-mds';

export const module2MarkDownMiniGames: MarkdownMiniGame[] = [
  {
    id: 'dde29963-9061-4952-937f-e4f7e46e8575',
    markdown: module2Mds[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module2TrueFalseMiniGames: TrueFalseMiniGame[] = [
  {
    id: 'e427c00c-000c-4c1d-ba1e-d8571a916ffb',
    correctAnswer: true,
    question:
      'A declaração `if` é usada para executar um bloco de código se uma condição for verdadeira.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '15499444-171b-441b-952a-3a9a6f4628b4',
    correctAnswer: true,
    question:
      'Você pode usar várias declarações `else if` para testar condições adicionais após uma `if`.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '7b097cbe-a7ad-4d40-a353-7de32fc462af',
    correctAnswer: false,
    question:
      'A declaração `else` é usada para executar um bloco de código se todas as condições forem verdadeiras.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module2MiniGames: MiniGame[] = [
  // Level 1: Declarações condicionais (if, else if, else)
  //
  {
    id: '8a9e7e07-d5ae-4c80-88c6-e35dad3370bf',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: module2TrueFalseMiniGames[0].id,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[4].id,
    type: 'TRUE_FALSE',
    orderNumber: 0,
  },
  // end Level 1;
];
