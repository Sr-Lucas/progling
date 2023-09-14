import {
  CodeCompletionMiniGame,
  CodeCompletionMiniGameOption,
  CodeOrderingMiniGame,
  CodeOrderingMiniGameOption,
  Level,
  MiniGame,
  Module,
  PrismaClient,
  ProgrammingLanguage,
  TrueFalseMiniGame,
  Image,
  Student,
} from '@prisma/client';
import console from 'console';
import { IEncrypter } from 'src/@core/adapters/encrypter/encrypter.interface';

export class SeedDevelopment {
  constructor(
    private readonly prisma: PrismaClient,
    private readonly encrypter: IEncrypter,
  ) {}

  private _students: Student[] = [
    {
      id: '8c7f370a-7a03-468c-9697-05acc34cfd7d',
      email: 'lucas@teste.tst',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'John Doe',
      password: 'Teste123@',
      deletedAt: null,
      hearts: 5,
      heartsRenewAt: new Date(),
    },
  ];

  private _images: Image[] = [
    {
      id: '1',
      name: 'c1bed7c2-8ba9-4b57-976d-a868c683d6a6.png',
      storeType: 'local',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      name: 'da97aea5-c3f4-4042-bb9d-24d769cf6dec.png',
      storeType: 'local',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _programmingLanguages: ProgrammingLanguage[] = [
    {
      name: 'JavaScript',
      description:
        'Este módulo introduz os fundamentos das variáveis, constantes e tipos de dados primitivos em JavaScript. Você irá aprender a declarar e manipular variáveis, compreender os diferentes tipos de dados, e explorar a conversão entre eles, adquirindo as bases essenciais para programar em JavaScript de forma eficaz.',
      createdAt: new Date(),
      updatedAt: new Date(),
      // generate a uuid
      id: '7506837e-3f60-4b11-99a0-98f131854999',
      imageId: this._images[0].id,
    },
    {
      name: 'Python',
      description:
        'Neste módulo, você mergulhará nos conceitos essenciais de variáveis e tipos de dados primitivos em Python. Aprenda a criar, atribuir valores e manipular variáveis, além de explorar os tipos de dados fundamentais, como inteiros, ponto flutuante, strings e booleanos. Ao final deste módulo, você terá uma sólida compreensão dos blocos de construção fundamentais da linguagem Python.',
      imageId: this._images[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'e9a47ab3-5588-4c21-ad3e-aeff0e6fb6f3',
    },
  ];

  private _modules: Module[] = [
    {
      name: 'Variáveis e Tipos de Dados em JavaScript',
      description:
        'Neste módulo, você explorará os pilares fundamentais do JavaScript. Aprenda a declarar variáveis, entender suas diferenças em relação a constantes e como elas armazenam informações dinâmicas. Descubra como os tipos de dados primitivos, como números inteiros, números de ponto flutuante, strings e booleanos, são essenciais para representar informações em programas JavaScript. Domine a conversão de tipos e adquira as bases para desenvolver aplicações web flexíveis e robustas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '0cc207e4-1205-4f34-94df-4abefd770631',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Estruturas de Controle em JavaScript',
      description:
        'Neste módulo, você mergulhará no controle do fluxo de programas JavaScript. Explore declarações condicionais, como if, else if e else, para criar lógica condicional. Aprenda a usar estruturas de repetição, como for, while e do...while, para automatizar tarefas e iterações. Compreenda o poder dessas estruturas para criar aplicações web dinâmicas e responsivas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'd0eb4677-9333-4397-964f-b692b4bce84c',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 1,
    },
    {
      name: 'Funções em JavaScript',
      description:
        'Este módulo é uma introdução ao mundo das funções em JavaScript. Aprenda a criar funções, passar argumentos, retornar valores e compreender o escopo de variáveis. Desenvolva habilidades fundamentais para organizar e reutilizar seu código JavaScript em aplicações web dinâmicas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '9f1046d7-7a3a-4545-a11f-a8afadb9e609',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Arrays e Objetos em JavaScript',
      description:
        'Explore a manipulação de dados em JavaScript com este módulo. Aprenda a criar, acessar e modificar arrays para armazenar coleções de informações. Descubra como usar objetos para representar estruturas de dados mais complexas. Essas habilidades são fundamentais para o desenvolvimento de aplicações web interativas e dinâmicas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'a602a528-4326-446a-b81e-75c875d5728b',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Eventos e Manipulação do DOM',
      description:
        'Neste módulo, você mergulhará no mundo da interatividade em páginas web. Aprenda a lidar com eventos de usuário, selecionar elementos HTML e modificar o conteúdo do DOM (Document Object Model). Adquira as habilidades necessárias para criar interfaces web dinâmicas e responsivas com JavaScript.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'a80451d8-9d66-4ef6-98af-13fe5d36e4ed',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Comunicação com o Servidor em JavaScript',
      description:
        'Neste módulo, você explorará a comunicação assíncrona com servidores web usando JavaScript. Aprenda a fazer requisições AJAX (Asynchronous JavaScript and XML), processar respostas e atualizar dinamicamente o conteúdo de suas páginas web. Essa habilidade é fundamental para criar aplicativos web modernos e responsivos.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'cd575bcf-6b7a-42aa-b90d-9a1ddbd81e2e',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Manipulação de Exceções em JavaScript',
      description:
        'Este módulo aborda a gestão de erros em JavaScript. Aprenda a lidar com exceções usando try...catch, lançar exceções personalizadas e garantir a robustez do seu código. Essas habilidades são cruciais para garantir que suas aplicações JavaScript funcionem de maneira confiável.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '57f06ec3-70b2-4a16-8b13-b1593563dcfd',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Introdução a ES6+ e Novos Recursos',
      description:
        'Explore os recursos mais recentes do JavaScript neste módulo. Aprenda sobre variáveis let e const, funções de flecha, literais de modelo, desestruturação, classes e módulos. Domine as técnicas modernas para tornar seu código JavaScript mais eficiente e legível.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '55533e8d-e2d7-4b26-ae41-ba2465b103f1',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
  ];

  private _levels: Level[] = [
    {
      name: '1.1 O que é o JavaScript',
      description:
        'Neste nível introdutório, você será apresentado ao JavaScript e sua importância no desenvolvimento web.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1465f146-ebaf-4a12-abda-d9281a37c386',
      moduleId: this._modules[0].id,
      orderNumber: 0,
    },
    {
      name: '1.2 Variáveis e Constantes',
      description:
        'Aprofunde-se no conceito de variáveis e constantes em JavaScript e como elas são usadas para armazenar informações dinâmicas e imutáveis.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'cf0b1973-9277-4f70-8f80-a6b5bf33576a',
      moduleId: this._modules[0].id,
      orderNumber: 1,
    },
    {
      name: '1.3 Tipos de Dados Primitivos',
      description:
        'Explore os tipos de dados primitivos em JavaScript, incluindo números, strings, booleanos e saiba como usá-los em seus programas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '6a3ca00b-a4da-4057-b005-f2f2110b0ba8',
      moduleId: this._modules[0].id,
      orderNumber: 2,
    },
    {
      name: '1.4 Conversão de Tipos de Dados',
      description:
        'Aprenda a converter entre diferentes tipos de dados em JavaScript para manipular informações de maneira flexível.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'dcade942-aaa3-4a09-801f-5f8729f1f66e',
      moduleId: this._modules[0].id,
      orderNumber: 3,
    },
    {
      name: '2.1 Declarações Condicionais (if, else if, else)',
      description:
        'Domine o uso de declarações condicionais em JavaScript para criar lógica baseada em condições.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'ec416a7d-6c14-465f-8b37-22ba48c4c836',
      moduleId: this._modules[1].id,
      orderNumber: 0,
    },
    {
      name: '2.2 Estruturas de Repetição (for, while, do...while)',
      description:
        'Aprenda a automatizar tarefas com estruturas de repetição em JavaScript.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'f06d24cd-086e-4eae-a797-26a0172f3750',
      moduleId: this._modules[1].id,
      orderNumber: 1,
    },
    {
      name: '2.3 Switch e Operador Ternário',
      description:
        'Explore as estruturas switch e o operador ternário para controlar o fluxo de seu código JavaScript.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '9cfa3326-866d-4abd-a83d-3b22f15e84d2',
      moduleId: this._modules[1].id,
      orderNumber: 2,
    },
    {
      name: '3.1 Criando Funções',
      description:
        'Neste nível, você aprenderá a criar funções em JavaScript, essenciais para a modularização e reutilização de código.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '7e870b5f-6bb6-4c66-9ceb-b4a46392f6e7',
      moduleId: this._modules[2].id,
      orderNumber: 0,
    },
    {
      name: '3.2 Parâmetros e Argumentos',
      description:
        'Explore como trabalhar com parâmetros e argumentos em funções JavaScript para tornar seus programas mais flexíveis.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '4aad81d8-cd08-41ca-964e-a7291925624a',
      moduleId: this._modules[2].id,
      orderNumber: 1,
    },
    {
      name: '3.3 Escopo de Variáveis',
      description:
        'Compreenda o escopo de variáveis em JavaScript e como ele afeta o acesso e a visibilidade das variáveis em suas funções.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '9e803eb1-c920-415a-b075-79fcee4f55b6',
      moduleId: this._modules[2].id,
      orderNumber: 2,
    },
    {
      name: '3.4 Retorno de Valores',
      description:
        'Aprenda a usar o retorno de valores em funções JavaScript para fornecer resultados calculados ou processados.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '52ae1a09-8e12-4918-bbbe-99f02387463f',
      moduleId: this._modules[2].id,
      orderNumber: 3,
    },
    {
      name: '4.1 Arrays: Criação, Manipulação e Iteração',
      description:
        'Neste nível, explore arrays em JavaScript, incluindo como criá-los, manipulá-los e iterar através de seus elementos.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1337199b-d6f8-41e2-8432-1420cd4e8b8a',
      moduleId: this._modules[3].id,
      orderNumber: 0,
    },
    {
      name: '4.2 Objetos: Propriedades e Métodos',
      description:
        'Aprofunde-se no mundo dos objetos JavaScript, incluindo suas propriedades e como criar métodos para manipulá-los.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'daa3b09d-bdda-41cc-b358-829dd58cbc76',
      moduleId: this._modules[3].id,
      orderNumber: 1,
    },
    {
      name: '4.3 JSON (JavaScript Object Notation)',
      description:
        'Aprenda sobre JSON, uma notação popular para serializar dados em JavaScript e trocá-los com servidores.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '95ce53a0-4617-4f92-a640-dda7de977103',
      moduleId: this._modules[3].id,
      orderNumber: 2,
    },
    {
      name: '5.1 Eventos de Usuário',
      description:
        'Neste nível, você aprenderá a lidar com eventos de usuário em JavaScript, tornando suas páginas web interativas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'aa3b18a3-9a91-4c91-98ea-1ea3ecd32cd7',
      moduleId: this._modules[4].id,
      orderNumber: 0,
    },
    {
      name: '5.2 Selecionando Elementos HTML',
      description:
        'Descubra como selecionar elementos HTML em suas páginas usando JavaScript para manipulá-los dinamicamente.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'a4d5aea9-d3d6-4779-a776-c97af3b3e985',
      moduleId: this._modules[4].id,
      orderNumber: 1,
    },
    {
      name: '5.3 Modificando o Conteúdo do DOM',
      description:
        'Aprenda a modificar o conteúdo do DOM (Document Object Model) em tempo real usando JavaScript para criar experiências dinâmicas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'a1ee0f85-b9bb-4978-8fec-6efaf2deb005',
      moduleId: this._modules[4].id,
      orderNumber: 2,
    },
    {
      name: '5.4 Event Delegation',
      description:
        'Explore o conceito de event delegation em JavaScript para lidar com eventos em elementos dinâmicos e otimizar seu código.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '38aa0ecf-9d63-4058-9827-1446de892560',
      moduleId: this._modules[4].id,
      orderNumber: 3,
    },
    {
      name: '6.1 Introdução ao AJAX',
      description:
        'Neste nível, você será apresentado ao AJAX (Asynchronous JavaScript and XML) e como realizar requisições assíncronas em JavaScript.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'e63bf304-09ca-4396-a97a-e78fd34a7b7c',
      moduleId: this._modules[5].id,
      orderNumber: 0,
    },
    {
      name: '6.2 Requisições GET e POST',
      description:
        'Aprenda a realizar requisições GET e POST com AJAX para buscar e enviar dados de forma assíncrona.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'dacac6ed-a777-42f6-a019-ce25a734a967',
      moduleId: this._modules[5].id,
      orderNumber: 1,
    },
    {
      name: '6.3 Tratamento de Respostas',
      description:
        'Compreenda como lidar com as respostas de requisições AJAX e atualizar dinamicamente o conteúdo de suas páginas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '2a7ff6cd-a870-4235-b04f-a9420e055ad0',
      moduleId: this._modules[5].id,
      orderNumber: 2,
    },
    {
      name: '7.1 Tratamento de Erros (try...catch)',
      description:
        'Aprenda a lidar com erros em JavaScript usando blocos try...catch para manter suas aplicações estáveis.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'b4b23946-1283-46f4-aaa0-f99e8239af31',
      moduleId: this._modules[6].id,
      orderNumber: 0,
    },
    {
      name: '7.2 Lançamento de Exceções Personalizadas',
      description:
        'Explore como lançar exceções personalizadas em JavaScript para comunicar erros de forma clara em seus programas.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '01790306-6b9c-4186-b719-4707ae4bd4fe',
      moduleId: this._modules[6].id,
      orderNumber: 1,
    },
    {
      name: '8.1 Variáveis let e const',
      description:
        'Este nível introduz as variáveis let e const, bem como suas diferenças e como usá-las em JavaScript ES6+.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'eedf7950-972a-4ca0-81e1-f4f637adcdbb',
      moduleId: this._modules[7].id,
      orderNumber: 0,
    },
    {
      name: '8.2 Arrow Functions',
      description:
        'Aprenda a criar funções de flecha (arrow functions) em JavaScript ES6+ para uma sintaxe mais concisa.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '31133d6d-0585-4ec4-ba1c-f5c70ab41128',
      moduleId: this._modules[7].id,
      orderNumber: 1,
    },
    {
      name: '8.3 Template Literals',
      description:
        'Explore as template literals em JavaScript ES6+ para criar strings interpoladas de forma mais eficiente.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '8d606fe0-9fe3-4779-86c4-e0eebe093bae',
      moduleId: this._modules[7].id,
      orderNumber: 2,
    },
    {
      name: '8.4 Destructuring',
      description:
        'Aprenda a usar a desestruturação (destructuring) em JavaScript ES6+ para extrair valores de objetos e arrays de forma simples.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1798380f-a61a-4688-87ed-9eca051d8cc2',
      moduleId: this._modules[7].id,
      orderNumber: 3,
    },
    {
      name: '8.5 Classes e Módulos',
      description:
        'Explore as classes e módulos em JavaScript ES6+ para criar código mais organizado e reutilizável.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '6e049689-b8a9-46c0-9df2-7bca5e3c5460',
      moduleId: this._modules[7].id,
      orderNumber: 4,
    },
  ];

  private _minigames: MiniGame[] = [
    // Level 1 (TRUE_FALSE e CODE_COMPLETION)
    {
      id: 'cce4264b-1add-4241-a12e-a3870e2bb28f',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 0,
    },
    {
      id: '87523449-42ce-4f6c-97e8-6180b839668f',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'CODE_COMPLETION',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
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
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 2,
    },
    {
      id: '410e27f2-371a-44c7-8c4f-692e85031a77',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'CODE_COMPLETION',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 3,
    },
    {
      id: '412d2492-a75c-485a-9c77-246054c31013',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 4,
    },
    {
      id: '79d60c7b-4d9e-4a0e-adbf-f81a1cd9b291',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'CODE_COMPLETION',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 5,
    },
    {
      id: '857f5036-5113-4fdd-a948-d6dbe7a9fb64',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 6,
    },
    // Level 2 (TRUE_FALSE e CODE_COMPLETION)
    {
      id: '1e6bd0cb-13b3-4493-8032-d7872116cf41',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: null,
      levelId: this._levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 7,
    },
    {
      id: '992f1963-b315-4d26-a23f-696ebcd74f08',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'CODE_COMPLETION',
      trueFalseMiniGameId: null,
      levelId: this._levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 8,
    },
    {
      id: '91e058a4-a587-405e-9db5-33bc1667a0c8',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: null,
      levelId: this._levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 9,
    },
    {
      id: '336e9567-f38e-4ae7-995c-d60e69e4ff00',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'CODE_COMPLETION',
      trueFalseMiniGameId: null,
      levelId: this._levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 10,
    },
    {
      id: '5aa3dc7c-54fd-4b88-978d-4a492cf7eecf',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: null,
      levelId: this._levels[1].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      markdownMiniGameId: null,
      orderNumber: 11,
    },
  ];

  private _trueFalseMiniGames: TrueFalseMiniGame[] = [
    {
      id: '2788f7d2-c188-4b44-ad5e-2e6fc2207ede',
      question: 'O operador "===" compara valores e tipos de dados iguais?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'f0c6c33b-62a3-45c4-b41d-f205716f6b36',
      question: 'O JavaScript permite a criação de páginas web interativas?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '54c5e786-82bf-4fd7-b996-b45b25245d32',
      question: 'NaN representa um valor não numérico em JavaScript?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'b8756028-1527-49d8-aed4-2f63f51d27b2',
      question:
        'A palavra-chave "const" é usada para declarar variáveis que podem ser reatribuídas?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'b03120c7-ed8a-440e-b01d-8062939c2c1c',
      question: 'JavaScript é uma linguagem de programação fortemente tipada?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3f597f0c-5a92-46f5-97fa-479585d5f4b5',
      question:
        'O JavaScript é amplamente usado para desenvolvimento de aplicativos móveis?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'eaf20699-a176-4bd4-b832-cc6847b91972',
      question: 'O operador "==" compara valores e tipos de dados iguais?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '65f632ce-cc37-4519-b240-6a5339881e8c',
      question:
        'O JavaScript permite a manipulação do DOM (Document Object Model)?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '61b4e1ba-6163-4b0e-9ab0-c771078c51d0',
      question:
        'A palavra-chave "let" é usada para declarar variáveis de escopo global?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'e7931843-e181-489f-a350-6d2dfde21b5d',
      question:
        'O JavaScript é uma linguagem de programação orientada a objetos?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'ed39d223-3411-461d-a619-b60848ac8c24',
      question: 'O JavaScript é usado apenas no lado do cliente?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'b1baf946-65a2-4eb8-8056-fdb70602e68d',
      question: 'NaN é igual a null em JavaScript?',
      correctAnswer: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'c353e146-4306-4911-8dc6-f0eeed640b12',
      question: 'O JavaScript é uma linguagem de programação case-sensitive?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '59502504-0e07-4772-9b27-ebf5582f8a90',
      question:
        'O operador "!=" compara valores diferentes, mas não tipos de dados diferentes?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _codeCompletionMiniGames: CodeCompletionMiniGame[] = [
    {
      id: '8f151fec-f708-44a0-8760-fba8f8a7c6d3',
      code: '_20_ variable = (x) => x * x;',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _codeCompletionMiniGameOptions: CodeCompletionMiniGameOption[] = [
    {
      id: '4bc9f9a2-e7a1-44b6-b7c5-5ee9efd87f65',
      codeCompletionMiniGameId: 'd6f56847-0c65-41d2-98b6-0cd3235d5255',
      content: 'arg',
      isCorrect: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '55676498-95c7-4e2c-a23b-e29b3815829c',
      codeCompletionMiniGameId: 'd6f56847-0c65-41d2-98b6-0cd3235d5255',
      content: 'var',
      isCorrect: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '371581bb-4fb7-4355-a729-7b9a499817db',
      codeCompletionMiniGameId: 'd6f56847-0c65-41d2-98b6-0cd3235d5255',
      content: 'touch',
      isCorrect: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5195e914-447c-41f3-ab86-e6c785a6e544',
      codeCompletionMiniGameId: 'd6f56847-0c65-41d2-98b6-0cd3235d5255',
      content: 'variable',
      isCorrect: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4ef68582-3b62-4256-a6da-fed62569a224',
      codeCompletionMiniGameId: 'd6f56847-0c65-41d2-98b6-0cd3235d5255',
      content: 'fun',
      isCorrect: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _codeOrderingMiniGames: CodeOrderingMiniGame[] = [
    {
      id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _codeOrderingMiniGameOptions: CodeOrderingMiniGameOption[] = [
    {
      id: '1',
      codeOrderingMiniGameId: '1',
      content: 'let',
      order: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      codeOrderingMiniGameId: '1',
      content: 'variable',
      order: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      codeOrderingMiniGameId: '1',
      content: '=',
      order: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      codeOrderingMiniGameId: '1',
      content: '1',
      order: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      codeOrderingMiniGameId: '1',
      content: ';',
      order: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  async execute(): Promise<void> {
    console.log('Seeding database... [DEV]');

    // CREATE images
    await this.prisma.image.createMany({
      data: this._images,
      skipDuplicates: true,
    });

    // CREATE programmingLanguages
    await this.prisma.programmingLanguage.createMany({
      data: this._programmingLanguages,
      skipDuplicates: true,
    });

    // CREATE modules
    await this.prisma.module.createMany({
      data: this._modules,
      skipDuplicates: true,
    });

    // CREATE levels
    await this.prisma.level.createMany({
      data: this._levels,
      skipDuplicates: true,
    });

    // CREATE trueFalseMiniGames
    await this.prisma.trueFalseMiniGame.createMany({
      data: this._trueFalseMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeCompletionMiniGames
    await this.prisma.codeCompletionMiniGame.createMany({
      data: this._codeCompletionMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeCompletionMiniGameOptions
    await this.prisma.codeCompletionMiniGameOption.createMany({
      data: this._codeCompletionMiniGameOptions,
      skipDuplicates: true,
    });

    // CREATE codeOrderingMiniGames
    await this.prisma.codeOrderingMiniGame.createMany({
      data: this._codeOrderingMiniGames,
      skipDuplicates: true,
    });

    // CREATE codeOrderingMiniGameOptions
    await this.prisma.codeOrderingMiniGameOption.createMany({
      data: this._codeOrderingMiniGameOptions,
      skipDuplicates: true,
    });

    // CREATE minigames
    await this.prisma.miniGame.createMany({
      data: this._minigames,
      skipDuplicates: true,
    });

    for (const student of this._students) {
      student.password = await this.encrypter.hash(student.password);
    }

    // CREATE students
    await this.prisma.student.createMany({
      data: this._students,
      skipDuplicates: true,
    });

    console.log('Seeding completed!');
  }
}
