import {
  CodeCompletionMiniGame,
  CodeCompletionMiniGameOption,
  MarkdownMiniGame,
  MiniGame,
  TrueFalseMiniGame,
} from '@prisma/client';
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

export const module2CodeCompletionMiniGames: CodeCompletionMiniGame[] = [
  {
    id: '6256133f-a0cb-4fec-b25c-520595ddf884',
    code: `\n const age = 18;\n\n _20_ (age < 18) {\n   console.log('Você é menor de idade.');\n }\n\n`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'c72d7fe7-8a45-433a-9cab-f625248c53e6',
    code: `\n const age = 18;\n\n if (age < 18) {\n   console.log('Você é menor de idade.');\n } _20_ {\n   console.log('Você é maior de idade.');\n }\n\n`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module2CodeCompletionMiniGameOptions: CodeCompletionMiniGameOption[] =
  [
    // Code Completion - 1 (6256133f-a0cb-4fec-b25c-520595ddf884)
    ...[
      {
        id: '1249d95f-fe5f-458f-96ff-4457eddf0067',
        codeCompletionMiniGameId: '6256133f-a0cb-4fec-b25c-520595ddf884',
        content: 'elif',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4d422971-1925-42a1-b2d1-5291143b8c0b',
        codeCompletionMiniGameId: '6256133f-a0cb-4fec-b25c-520595ddf884',
        content: 'se',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'af885ab7-e708-48f3-9b9b-5634878851bc',
        codeCompletionMiniGameId: '6256133f-a0cb-4fec-b25c-520595ddf884',
        content: 'while',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '55894438-2b73-4c15-8a7b-b10d54692c95',
        codeCompletionMiniGameId: '6256133f-a0cb-4fec-b25c-520595ddf884',
        content: 'as',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'ddc6af11-c073-4f11-866c-feedb1210f30',
        codeCompletionMiniGameId: '6256133f-a0cb-4fec-b25c-520595ddf884',
        content: 'if',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 1;

    // Code Completion - 2 (c72d7fe7-8a45-433a-9cab-f625248c53e6)
    ...[
      {
        id: 'bc59bf0b-18e3-48e7-a400-54d6e9e9cef6',
        codeCompletionMiniGameId: 'c72d7fe7-8a45-433a-9cab-f625248c53e6',
        content: 'elif',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'cc7eda8e-5914-4c4d-8107-6a3db53745cf',
        codeCompletionMiniGameId: 'c72d7fe7-8a45-433a-9cab-f625248c53e6',
        content: 'else',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8ef3e9ba-c4e1-4e62-bebe-2dd1520f61bf',
        codeCompletionMiniGameId: 'c72d7fe7-8a45-433a-9cab-f625248c53e6',
        content: 'while',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '13669058-7443-43a5-88d3-2fdaffa13bf2',
        codeCompletionMiniGameId: 'c72d7fe7-8a45-433a-9cab-f625248c53e6',
        content: 'or',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '98d6635f-7724-450f-9efe-5bfffad0566f',
        codeCompletionMiniGameId: 'c72d7fe7-8a45-433a-9cab-f625248c53e6',
        content: 'if',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 2;
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
    id: '0693acc8-a11a-4e0e-8c73-caaaa2115065',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: module2MarkDownMiniGames[0].id,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'MARKDOWN',
    orderNumber: 0,
  },
  {
    id: '8a9e7e07-d5ae-4c80-88c6-e35dad3370bf',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: module2TrueFalseMiniGames[0].id,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'TRUE_FALSE',
    orderNumber: 0,
  },
  {
    id: '19fd91d4-bc30-4400-93c1-553d9e65421a',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: module2TrueFalseMiniGames[1].id,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'TRUE_FALSE',
    orderNumber: 0,
  },
  {
    id: '436934d8-e4b4-4abe-a0f8-f479d1b31676',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: module2TrueFalseMiniGames[2].id,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'TRUE_FALSE',
    orderNumber: 0,
  },
  {
    id: 'cf37559c-1a5f-4b54-b4a1-a97f536a00d6',
    codeCompletionMiniGameId: module2CodeCompletionMiniGames[0].id,
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'CODE_COMPLETION',
    orderNumber: 0,
  },
  {
    id: 'b87b5cf6-8f96-47f6-923f-84adde764486',
    codeCompletionMiniGameId: module2CodeCompletionMiniGames[1].id,
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'CODE_COMPLETION',
    orderNumber: 0,
  },
  {
    id: 'b87b5cf6-8f96-47f6-923f-84adde764486',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[2].id,
    type: 'CODE_ORDERING',
    orderNumber: 0,
  },
  // end Level 1;
];
