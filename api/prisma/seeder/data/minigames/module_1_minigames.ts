import {
  CodeCompletionMiniGame,
  CodeCompletionMiniGameOption,
  CodeOrderingMiniGame,
  CodeOrderingMiniGameOption,
  MarkdownMiniGame,
  MiniGame,
  TrueFalseMiniGame,
} from '@prisma/client';
import { levels } from '../levels';
import { module1Mds } from './makdowns/module1-mds';

export const module1MarkdownMiniGames: MarkdownMiniGame[] = [
  {
    id: 'b9ae4dea-8299-454e-9a62-6e6c602bb1e3',
    markdown: module1Mds[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '20eda953-55ba-426a-b42d-bf2aa29545d0',
    markdown: module1Mds[1],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'ff0b7e21-4223-4f2b-b1be-4a09468a236e',
    markdown: module1Mds[2],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module1TrueFalseMiniGames: TrueFalseMiniGame[] = [
  // Level 1: O que é o javascript
  //
  ...[
    {
      id: 'e6e954ff-7cdb-473e-8f86-fec9611097d9',
      correctAnswer: true,
      question:
        'JavaScript é uma linguagem de programação orientada a eventos.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'c533dbea-6c4f-4f1b-8287-1252c969c448',
      correctAnswer: false,
      question: 'JavaScript é uma linguagem compilada antes da execução.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '7d281a79-8052-4b48-9f8a-4dea912cc5bd',
      correctAnswer: true,
      question:
        'JavaScript pode ser utilizado tanto no lado do cliente (navegador) quanto no lado do servidor (Node.js).',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '078d37c9-a48c-4c2d-a505-f0482c0df12b',
      correctAnswer: true,
      question:
        'JavaScript é amplamente utilizado no desenvolvimento de aplicações web interativas.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  //end Level 1 (qtd: 4);

  // Level 2: Variáveis e constantes
  //
  ...[
    {
      id: '3cbafacc-8161-4dfc-b2a5-37b418b159da',
      correctAnswer: true,
      question:
        'Variáveis em JavaScript podem ser atualizadas após a sua declaração.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4de4cf8d-25c6-45dd-90b2-fc19559b0f81',
      correctAnswer: false,
      question:
        'Constantes em JavaScript podem ser atualizadas após a sua declaração.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'd0d79eb4-a6a0-4dc3-8510-1b937932bf50',
      correctAnswer: true,
      question:
        'Variáveis declaradas com a palavra-chave "let" não são inicializadas automaticamente com o valor "undefined".',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'd8e300be-cacc-47ce-bc9a-1511fb25efed',
      correctAnswer: true,
      question:
        'Variáveis declaradas com a palavra-chave "let" podem sofrer mudanças de tipo durante a execução do programa.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  //end Level 2;
];

export const module1CodeCompletionMiniGames: CodeCompletionMiniGame[] = [
  // Level 2: Variáveis e constantes
  //
  ...[
    {
      id: '6e2d5644-8c68-427c-8cfb-02af7580ec31',
      code: `\n// Declaração de variáveis\n_20_ nome = "João";\n\nconsole.log(nome); // João`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '05ab12db-55ec-4fad-8811-562514597433',
      code: `\n// Declaração de constantes\n_20_ PI = 3.14159;\nconsole.log(PI); // 3.14159
    `,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  //end Level 2;
];

export const module1CodeOrderingMiniGames: CodeOrderingMiniGame[] = [
  {
    id: '32eab195-6ca4-450f-ada0-6f89d5395963',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module1CodeOrderingMiniGameOptions: CodeOrderingMiniGameOption[] =
  [
    {
      id: '5b9550db-e37b-4b89-aff4-485e518b5635',
      order: 0,
      codeOrderingMiniGameId: '32eab195-6ca4-450f-ada0-6f89d5395963',
      content: 'var',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '10c71167-fbb9-4c19-b048-17f11925028b',
      order: 1,
      codeOrderingMiniGameId: '32eab195-6ca4-450f-ada0-6f89d5395963',
      content: 'userName',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5abcd88d-ace9-4ba3-af6d-372304bebfed',
      order: 2,
      codeOrderingMiniGameId: '32eab195-6ca4-450f-ada0-6f89d5395963',
      content: '=',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'd695f98a-2c22-4065-9358-48b6e4ac4593',
      order: 3,
      codeOrderingMiniGameId: '32eab195-6ca4-450f-ada0-6f89d5395963',
      content: 'Eduardo Mendes',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '15aff025-eee8-42e4-a4b5-036c137caa31',
      order: 4,
      codeOrderingMiniGameId: '32eab195-6ca4-450f-ada0-6f89d5395963',
      content: ';',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

export const module1CodeCompletionMiniGameOptions: CodeCompletionMiniGameOption[] =
  [
    // Code Completion - 1 (6e2d5644-8c68-427c-8cfb-02af7580ec31)
    ...[
      {
        id: 'df7d361d-c893-492e-9e65-ba34343c6799',
        codeCompletionMiniGameId: '6e2d5644-8c68-427c-8cfb-02af7580ec31',
        content: 'arg',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'be38d012-0464-4091-8677-8f3c2ae9a9f0',
        codeCompletionMiniGameId: '6e2d5644-8c68-427c-8cfb-02af7580ec31',
        content: 'var',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2b94cb57-25fe-4cf1-8f1b-fd1b8ebd4cec',
        codeCompletionMiniGameId: '6e2d5644-8c68-427c-8cfb-02af7580ec31',
        content: 'const',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'a78c2199-9572-4e98-a001-0a4eaf3e6dc0',
        codeCompletionMiniGameId: '6e2d5644-8c68-427c-8cfb-02af7580ec31',
        content: 'main',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4fa48902-2df5-45cb-93f6-3e8259e9143b',
        codeCompletionMiniGameId: '6e2d5644-8c68-427c-8cfb-02af7580ec31',
        content: 'set',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 1;

    // Code Completion - 2 (05ab12db-55ec-4fad-8811-562514597433)
    ...[
      {
        id: 'c500feaf-266d-4dcb-b0f1-c224d6e81662',
        codeCompletionMiniGameId: '05ab12db-55ec-4fad-8811-562514597433',
        content: 'arg',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'fd69386c-2674-4564-8ac9-891d68c9e00e',
        codeCompletionMiniGameId: '05ab12db-55ec-4fad-8811-562514597433',
        content: 'var',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '719d15a9-14a5-444e-bb51-d433da8087d9',
        codeCompletionMiniGameId: '05ab12db-55ec-4fad-8811-562514597433',
        content: 'const',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5c5ce636-9ac1-4a3a-8fce-55c687fc5a88',
        codeCompletionMiniGameId: '05ab12db-55ec-4fad-8811-562514597433',
        content: 'main',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4401a431-6bab-4563-88bf-af1f7ec825c0',
        codeCompletionMiniGameId: '05ab12db-55ec-4fad-8811-562514597433',
        content: 'set',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 2;
  ];

// Módulo 1: Variáveis e Tipos de Dados em JavaScript
export const module1MiniGames: MiniGame[] = [
  // Level 1: O que é o javascript
  //
  ...([
    {
      id: 'a028e8e3-8aff-420f-9213-18b376c848bf',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'MARKDOWN',
      trueFalseMiniGameId: null,
      levelId: levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: module1MarkdownMiniGames[0].id,
      orderNumber: 0,
    },
    {
      id: 'cce4264b-1add-4241-a12e-a3870e2bb28f',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: module1TrueFalseMiniGames[0].id,
      levelId: levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 1,
    },
    {
      id: '76a55e16-225d-4a26-a458-759f62ce9b52',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: module1TrueFalseMiniGames[1].id,
      levelId: levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 2,
    },
    {
      id: '412d2492-a75c-485a-9c77-246054c31013',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: module1TrueFalseMiniGames[2].id,
      levelId: levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 3,
    },
    {
      id: '857f5036-5113-4fdd-a948-d6dbe7a9fb64',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: module1TrueFalseMiniGames[3].id,
      levelId: levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 4,
    },
  ] as MiniGame[]),
  //end Level 1;

  // Level 2: Variáveis e constantes
  //
  ...([
    {
      id: 'ce7b34b4-5f6d-4d65-9177-13210c792fdd',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'MARKDOWN',
      trueFalseMiniGameId: null,
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: module1MarkdownMiniGames[1].id,
      orderNumber: 0,
    },
    {
      id: '3bb2b126-268d-43aa-8fdd-5b061484fc42',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: '32eab195-6ca4-450f-ada0-6f89d5395963',
      trueFalseMiniGameId: null,
      markdownMiniGameId: null,
      type: 'CODE_ORDERING',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 1,
    },
    {
      id: '1e6bd0cb-13b3-4493-8032-d7872116cf41',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: module1TrueFalseMiniGames[4].id,
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 2,
    },
    {
      id: '992f1963-b315-4d26-a23f-696ebcd74f08',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: module1TrueFalseMiniGames[5].id,
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 3,
    },
    {
      id: '91e058a4-a587-405e-9db5-33bc1667a0c8',
      codeCompletionMiniGameId: module1CodeCompletionMiniGames[0].id,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: null,
      markdownMiniGameId: null,
      type: 'CODE_COMPLETION',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 4,
    },
    {
      id: '336e9567-f38e-4ae7-995c-d60e69e4ff00',
      codeCompletionMiniGameId: module1CodeCompletionMiniGames[1].id,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: null,
      markdownMiniGameId: null,
      type: 'CODE_COMPLETION',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 5,
    },
    {
      id: '5aa3dc7c-54fd-4b88-978d-4a492cf7eecf',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: module1TrueFalseMiniGames[6].id,
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 6,
    },
    {
      id: '9b948d01-5aae-4207-84d2-6e9fa46284d4',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: module1TrueFalseMiniGames[7].id,
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 7,
    },
    {
      id: 'cf027013-87c5-4a01-9e6e-ec573bd5fdcc',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: null,
      markdownMiniGameId: module1MarkdownMiniGames[2].id,
      type: 'MARKDOWN',
      levelId: levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 8,
    },
  ] as MiniGame[]),
  //end Level 2;

  // Level 3: Tipos de dados
  //
  ...([] as MiniGame[]),
  //end Level 3;
];
