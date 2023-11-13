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
  {
    id: 'b7438ad7-e4ad-46de-927e-dc69a33ac408',
    markdown: module2Mds[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module2CodeCompletionMiniGames: CodeCompletionMiniGame[] = [
  /**
   * JavaScript
   */
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

  /**
   * Python
   */
  {
    id: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
    code: `\n const age = 18;\n\n _20_ (age < 18):\n   console.log('Você é menor de idade.');\n\n`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
    code: `\n const age = 18;\n\n if (age < 18):\n   console.log('Você é menor de idade.');\n _20_:\n   console.log('Você é maior de idade.');\n\n`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '9a391560-2d48-4089-b564-d19bef94d5c9',
    code: `\n const age = 18;\n\n if (age < 18):\n   console.log('Você é menor de idade.');\n elif (age > 18):\n   console.log('Você é maior de idade.');\n _20_:\n   console.log('Você tem 18 anos.');\n\n`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module2CodeCompletionMiniGameOptions: CodeCompletionMiniGameOption[] =
  [
    /**
     * Javascript
     */

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

    /**
     * Python
     */

    // Code Completion - 1 (b9fef292-a02a-495b-9bc1-2a479a8b1eb1)
    ...[
      {
        id: '1f507b24-824c-4f46-8e94-66948be79b05',
        codeCompletionMiniGameId: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
        content: 'elif',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f7c54437-3fb7-46a8-8525-a31dba240a43',
        codeCompletionMiniGameId: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
        content: 'else',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'f74da997-ef74-490f-9935-0035830d9721',
        codeCompletionMiniGameId: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
        content: 'while',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5f885054-a24f-49aa-be3a-59ee9371e2e4',
        codeCompletionMiniGameId: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
        content: 'or',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '0ff1abed-125b-4657-82c7-3b6848e4d682',
        codeCompletionMiniGameId: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
        content: 'if',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 1;

    // Code Completion - 2 (91c350ef-8784-4270-ad95-f17b8ec8daf0)

    ...[
      {
        id: '526eea41-62ad-4b60-a26a-4c0f576233d7',
        codeCompletionMiniGameId: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
        content: 'elif',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '21b5aa17-279a-4d1b-a4a0-e86d4ee94fb6',
        codeCompletionMiniGameId: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
        content: 'else',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'd0cfc832-2e1b-4eaa-b4af-ec50a281b53b',
        codeCompletionMiniGameId: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
        content: 'while',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '19dbf3a1-0354-4156-bd3a-e290592e1d8c',
        codeCompletionMiniGameId: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
        content: 'or',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '92071dc2-26f4-4ea5-8642-904d2ceee8df',
        codeCompletionMiniGameId: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
        content: 'if',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 2;

    // Code Completion - 3 (9a391560-2d48-4089-b564-d19bef94d5c9)

    ...[
      {
        id: 'd8afcd6a-b648-4d64-85a4-bf1905a0ada9',
        codeCompletionMiniGameId: '9a391560-2d48-4089-b564-d19bef94d5c9',
        content: 'elif',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '04837e78-5aaf-4116-9aff-265267afddce',
        codeCompletionMiniGameId: '9a391560-2d48-4089-b564-d19bef94d5c9',
        content: 'else',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'bffc5f24-9eb8-4f6d-841e-2178a3eaa174',
        codeCompletionMiniGameId: '9a391560-2d48-4089-b564-d19bef94d5c9',
        content: 'while',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '03c0b3a5-a269-4848-9fb4-ae49c761d830',
        codeCompletionMiniGameId: '9a391560-2d48-4089-b564-d19bef94d5c9',
        content: 'or',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '15f20a5a-4e91-4e9d-8160-252bc8c8e7da',
        codeCompletionMiniGameId: '9a391560-2d48-4089-b564-d19bef94d5c9',
        content: 'if',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 3;
  ];

export const module2TrueFalseMiniGames: TrueFalseMiniGame[] = [
  /**
   * Javascript
   */
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

  /**
   * Python
   */
  {
    id: '4ea1c5a7-4baf-46b7-931d-e205fb0a25d4',
    correctAnswer: true,
    question:
      'Condicionais são usadas para executar um bloco de código se uma condição for verdadeira.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'cde7097b-096a-4bed-a820-00c0cfd98feb',
    correctAnswer: true,
    question:
      'Condicionais falsas executam um bloco de código precedido por `else`.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '035310fd-410f-42be-83fa-f1724b1e0231',
    correctAnswer: false,
    question: '`elif` não é uma palavra reservada válida em Python.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module2MiniGames: MiniGame[] = [
  /**
   * JavaScript
   */

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

  /**
   * Python
   */

  // Level 1: Declarações condicionais (if, elif, else)
  {
    id: 'baaa3c74-0e8e-49b8-bdcf-00dc044da226',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: 'b7438ad7-e4ad-46de-927e-dc69a33ac408',
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'MARKDOWN',
    orderNumber: 0,
  },
  {
    id: '399ee3aa-9bdb-4c3e-bffa-ed0963f8ee3b',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: '4ea1c5a7-4baf-46b7-931d-e205fb0a25d4',
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'TRUE_FALSE',
    orderNumber: 1,
  },
  {
    id: '08e4ab6f-fb05-4847-86fb-64b95ec9ae2b',
    codeCompletionMiniGameId: 'b9fef292-a02a-495b-9bc1-2a479a8b1eb1',
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'CODE_COMPLETION',
    orderNumber: 2,
  },
  {
    id: '4172ab26-0aa6-4fb6-9958-e26e1b1c0217',
    codeCompletionMiniGameId: '91c350ef-8784-4270-ad95-f17b8ec8daf0',
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'CODE_COMPLETION',
    orderNumber: 3,
  },
  {
    id: '7935a456-7574-489b-84e0-28af14c60151',
    codeCompletionMiniGameId: '9a391560-2d48-4089-b564-d19bef94d5c9',
    trueFalseMiniGameId: null,
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'CODE_COMPLETION',
    orderNumber: 4,
  },
  {
    id: 'd71e12d9-647f-4426-a7bf-a33a61e4261c',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: 'cde7097b-096a-4bed-a820-00c0cfd98feb',
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'TRUE_FALSE',
    orderNumber: 5,
  },
  {
    id: '42f5b031-bcff-463a-b390-c67e40d49cc2',
    codeCompletionMiniGameId: null,
    trueFalseMiniGameId: '035310fd-410f-42be-83fa-f1724b1e0231',
    codeOrderingMiniGameId: null,
    markdownMiniGameId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    levelId: levels[28].id,
    type: 'TRUE_FALSE',
    orderNumber: 6,
  },
];
