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
  /**
   * JavaScript
   */
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

  /**
   * Python
   */
  {
    id: 'f8d0a6a7-b18d-4d16-8e53-1d4422b727bc',
    markdown: module1Mds[3],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '0964fab1-3956-4035-b299-2ff1083cab78',
    markdown: module1Mds[4],
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

  /**
   * Python
   */

  // Level 1
  {
    id: '8ea5fc07-bda7-4ef1-a7d9-0375eb3960e5',
    correctAnswer: true,
    question: 'Python é uma linguagem de programação orientada a eventos.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4ae36f65-5950-4c60-a9b0-1de902fb6488',
    correctAnswer: false,
    question: 'Python é uma linguagem compilada antes da execução.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '809b9e29-5578-4efc-981b-ed1c5036e41b',
    correctAnswer: true,
    question:
      'Python pode ser utilizado tanto no lado do cliente (navegador) quanto no lado do servidor (Node.js).',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '1cbbdc17-bd52-44ae-8bbc-28763e976950',
    correctAnswer: true,
    question:
      'Python é amplamente utilizado no desenvolvimento de aplicações web interativas.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // Level 2
  {
    id: '6a70aef5-9089-49eb-bb10-dec806917424',
    correctAnswer: true,
    question:
      'Variáveis em Python podem ser atualizadas após a sua declaração.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '08b0a628-c20f-49fb-b818-58668f10e344',
    correctAnswer: true,
    question:
      'Em Python, o tipo de uma variável pode ser alterado apos a atribuição do primeiro valor.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '62cba724-448c-4dbc-9aba-8450377d123f',
    correctAnswer: false,
    question:
      'Em Python, existem constantes e elas sao imutáveis e declaradas com o nome da variável em letras maiúsculas.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module1CodeCompletionMiniGames: CodeCompletionMiniGame[] = [
  /**
   * JavaScript
   */

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

  /**
   * Python
   */

  {
    id: 'ffc83078-6467-496d-aef8-943a1237dc04',
    code: `\n// Declaração de variáveis\nnome _20_ "João"\n\nprint(nome) // João`,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const module1CodeOrderingMiniGames: CodeOrderingMiniGame[] = [
  /**
   * JavaScript
   */
  {
    id: '32eab195-6ca4-450f-ada0-6f89d5395963',
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  /**
   * Python
   */
  {
    id: '5f545f25-9a55-43d9-83f3-3edb56701997',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '4f092c07-c6b9-4e58-8167-f7e9813a9532',
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

    // Python
    {
      id: '67cf4c7c-377b-4075-b996-84fb25106924',
      order: 0,
      codeOrderingMiniGameId: '5f545f25-9a55-43d9-83f3-3edb56701997',
      content: 'name',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '0401caac-dadd-4a1d-891c-188a98d006f1',
      order: 1,
      codeOrderingMiniGameId: '5f545f25-9a55-43d9-83f3-3edb56701997',
      content: '=',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '479a2e96-841e-45a7-a5ee-53424c0c1ce2',
      order: 2,
      codeOrderingMiniGameId: '5f545f25-9a55-43d9-83f3-3edb56701997',
      content: '"João"',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'f7b3ee6d-cd15-495e-8122-2190d8cff53a',
      order: 0,
      codeOrderingMiniGameId: '4f092c07-c6b9-4e58-8167-f7e9813a9532',
      content: 'name',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '78aaa959-2648-4842-89c2-f8a9f5d74c12',
      order: 1,
      codeOrderingMiniGameId: '4f092c07-c6b9-4e58-8167-f7e9813a9532',
      content: '=',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '29d87295-31c4-45b3-8ef2-4b7d37313f4b',
      order: 2,
      codeOrderingMiniGameId: '4f092c07-c6b9-4e58-8167-f7e9813a9532',
      content: '"João"',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

export const module1CodeCompletionMiniGameOptions: CodeCompletionMiniGameOption[] =
  [
    /**
     * JavaScript
     */
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

    /**
     * Python
     */

    // Code Completion - 1 (ffc83078-6467-496d-aef8-943a1237dc04)
    ...[
      {
        id: '6eb4c629-1e6c-447f-a66e-42c5be2da5a8',
        codeCompletionMiniGameId: 'ffc83078-6467-496d-aef8-943a1237dc04',
        content: ':=',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '25cab3f8-8e1d-44cc-8a33-8c433e46f76c',
        codeCompletionMiniGameId: 'ffc83078-6467-496d-aef8-943a1237dc04',
        content: '==',
        isCorrect: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '990c1143-f516-478e-84a5-8340976e7100',
        codeCompletionMiniGameId: 'ffc83078-6467-496d-aef8-943a1237dc04',
        content: '-',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'b35e806d-38c6-4654-becb-003c0c5bf95a',
        codeCompletionMiniGameId: 'ffc83078-6467-496d-aef8-943a1237dc04',
        content: '=',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5f25ddf0-0445-4d56-8ec1-1269ccfc21a1',
        codeCompletionMiniGameId: 'ffc83078-6467-496d-aef8-943a1237dc04',
        content: '<-',
        isCorrect: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    //end Code Completion - 1;
  ];

// Módulo 1: Variáveis e Tipos de Dados em JavaScript
export const module1MiniGames: MiniGame[] = [
  /**
   * JavaScript
   */

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

  /**
   * Python
   */
  // Level 1.1 Introdução ao Python
  ...([
    {
      id: 'ce7b34b4-5f6d-4d65-9177-13210c792fde',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: null,
      type: 'MARKDOWN',
      levelId: levels[26].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: module1MarkdownMiniGames[0].id,
      orderNumber: 0,
    },
    {
      id: '3bb2b126-268d-43aa-8fdd-5b061484fc43',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: '5f545f25-9a55-43d9-83f3-3edb56701997',
      trueFalseMiniGameId: null,
      type: 'CODE_ORDERING',
      levelId: levels[26].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 1,
    },
    {
      id: '1e6bd0cb-13b3-4493-8032-d7872116cf42',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: '8ea5fc07-bda7-4ef1-a7d9-0375eb3960e5',
      levelId: levels[26].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 2,
    },
    {
      id: '992f1963-b315-4d26-a23f-696ebcd74f09',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: '4ae36f65-5950-4c60-a9b0-1de902fb6488',
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[26].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 3,
    },
    {
      id: '5aa3dc7c-54fd-4b88-978d-4a492cf7eec0',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: '809b9e29-5578-4efc-981b-ed1c5036e41b',
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[26].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 4,
    },
    {
      id: '9b948d01-5aae-4207-84d2-6e9fa46284d5',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: '1cbbdc17-bd52-44ae-8bbc-28763e976950',
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[26].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 5,
    },
  ] as MiniGame[]),

  ...([
    {
      id: '8e07d542-3d07-4fe9-9029-1816772e85ed',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: null,
      markdownMiniGameId: '0964fab1-3956-4035-b299-2ff1083cab78',
      type: 'MARKDOWN',
      levelId: levels[27].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 0,
    },
    {
      id: '8b608810-3c42-4bf4-a3d4-4f1720a59973',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: '6a70aef5-9089-49eb-bb10-dec806917424',
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[27].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 1,
    },
    {
      id: '8ae32219-feab-4a6f-a85c-3bae2e0e439f',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: '08b0a628-c20f-49fb-b818-58668f10e344',
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[27].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 2,
    },
    {
      id: 'ae0b48bf-7ec6-49dd-935f-a424f3d0b691',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: '4f092c07-c6b9-4e58-8167-f7e9813a9532',
      trueFalseMiniGameId: null,
      type: 'CODE_ORDERING',
      levelId: levels[27].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 3,
    },
    {
      id: 'cf8fd007-4f00-4ae9-b894-77e9691f556c',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: '62cba724-448c-4dbc-9aba-8450377d123f',
      markdownMiniGameId: null,
      type: 'TRUE_FALSE',
      levelId: levels[27].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 4,
    },
    {
      id: '1ba5e9eb-8ffc-43dc-a8ab-d4d7c299e487',
      codeCompletionMiniGameId: 'ffc83078-6467-496d-aef8-943a1237dc04',
      codeOrderingMiniGameId: null,
      trueFalseMiniGameId: null,
      markdownMiniGameId: null,
      type: 'CODE_COMPLETION',
      levelId: levels[27].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 5,
    },
  ] as MiniGame[]),
];
