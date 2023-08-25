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
  StudentAnswer,
  StudentLevelProgress,
} from '@prisma/client';

export class SeedDevelopment {
  constructor(private readonly prisma: PrismaClient) {}

  private _students: Student[] = [
    {
      id: '1',
      email: 'john@doe.com',
      createdAt: new Date(),
      updatedAt: new Date(),
      name: 'John Doe',
      password: '$2b$10$',
    },
  ];

  private _studentProgress: StudentAnswer[] = [
    {
      id: '1',
      studentId: '1',
      miniGameId: '1',
      correct: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _studentLevelProgress: StudentLevelProgress[] = [
    {
      id: '1',
      studentId: '1',
      levelId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
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
  ];

  private _programmingLanguages: ProgrammingLanguage[] = [
    {
      name: 'JavaScript',
      description:
        'JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications.',
      createdAt: new Date(),
      updatedAt: new Date(),
      // generate a uuid
      id: '7506837e-3f60-4b11-99a0-98f131854999',
      imageId: this._images[0].id,
    },
    {
      name: 'TypeScript',
      description:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '0df520f7-6124-4d39-ae65-38f711e2a91f',
    },
    {
      name: 'Python',
      description:
        'Python is a interpreted high-level programming language for general-purpose programming.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'e9a47ab3-5588-4c21-ad3e-aeff0e6fb6f3',
    },
    {
      name: 'Java',
      description:
        'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '701cdf3a-34d9-4c85-a649-5dc7af9afc72',
    },
    {
      name: 'C#',
      description:
        'C# is a general-purpose, multi-paradigm programming language encompassing static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'e8d2a075-fd08-44a4-a5c8-0144c72aaf37',
    },
    {
      name: 'PHP',
      description:
        'PHP is a general-purpose scripting language geared towards web development.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '02881c9b-cae1-4066-9551-885c97f68623',
    },
    {
      name: 'Go',
      description:
        'Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '19525d04-9be3-470e-acc3-63d24094f4f8',
    },
    {
      name: 'Ruby',
      description:
        'Ruby is an interpreted, high-level, general-purpose programming language.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: 'f9f0f115-92e9-42ae-9522-594eeaf705d6',
    },
    {
      name: 'Rust',
      description:
        'Rust is a multi-paradigm, compiled programming language designed for performance and safety, especially safe concurrency.',
      imageId: this._images[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '2d8c9b5d-d0c0-417a-98c2-be432548ce92',
    },
  ];

  private _modules: Module[] = [
    {
      name: 'Introduction to JavaScript',
      description:
        'This module is an introduction to the world of JavaScript. You will learn the basics of JavaScript and how to think like a JavaScript developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1',
      programmingLanguageId: this._programmingLanguages[0].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to TypeScript',
      description:
        'This module is an introduction to the world of TypeScript. You will learn the basics of TypeScript and how to think like a TypeScript developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '2',
      programmingLanguageId: this._programmingLanguages[1].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to Python',
      description:
        'This module is an introduction to the world of Python. You will learn the basics of Python and how to think like a Python developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '3',
      programmingLanguageId: this._programmingLanguages[2].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to Java',
      description:
        'This module is an introduction to the world of Java. You will learn the basics of Java and how to think like a Java developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '4',
      programmingLanguageId: this._programmingLanguages[3].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to C#',
      description:
        'This module is an introduction to the world of C#. You will learn the basics of C# and how to think like a C# developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '5',
      programmingLanguageId: this._programmingLanguages[4].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to PHP',
      description:
        'This module is an introduction to the world of PHP. You will learn the basics of PHP and how to think like a PHP developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '6',
      programmingLanguageId: this._programmingLanguages[5].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to Go',
      description:
        'This module is an introduction to the world of Go. You will learn the basics of Go and how to think like a Go developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '7',
      programmingLanguageId: this._programmingLanguages[6].id,
      orderNumber: 0,
    },
    {
      name: 'Introduction to Ruby',
      description:
        'This module is an introduction to the world of Ruby. You will learn the basics of Ruby and how to think like a Ruby developer.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '8',
      programmingLanguageId: this._programmingLanguages[7].id,
      orderNumber: 0,
    },
  ];

  private _levels: Level[] = [
    {
      name: 'Beginner JS',
      description:
        'This level is for people who have never programmed before or have very little experience with programming.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '1',
      moduleId: this._modules[0].id,
      orderNumber: 0,
    },
    {
      name: 'Intermediate JS',
      description:
        'This level is for people who have some experience with programming but are not yet comfortable with it.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '2',
      moduleId: this._modules[0].id,
      orderNumber: 1,
    },
    {
      name: 'Advanced JS',
      description:
        'This level is for people who have a lot of experience with programming and are comfortable with it.',
      createdAt: new Date(),
      updatedAt: new Date(),
      id: '3',
      moduleId: this._modules[0].id,
      orderNumber: 2,
    },
  ];

  private _minigames: MiniGame[] = [
    {
      id: '1',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: null,
      type: 'TRUE_FALSE',
      trueFalseMiniGameId: '1',
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 0,
    },
    {
      id: '2',
      codeCompletionMiniGameId: '1',
      codeOrderingMiniGameId: null,
      type: 'CODE_COMPLETION',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 1,
    },
    {
      id: '3',
      codeCompletionMiniGameId: null,
      codeOrderingMiniGameId: '1',
      type: 'CODE_ORDERING',
      trueFalseMiniGameId: null,
      levelId: this._levels[0].id,
      createdAt: new Date(),
      updatedAt: new Date(),
      orderNumber: 2,
    },
  ];

  private _trueFalseMiniGames: TrueFalseMiniGame[] = [
    {
      id: '1',
      question: 'Is this a question?',
      correctAnswer: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _codeCompletionMiniGames: CodeCompletionMiniGame[] = [
    {
      id: '1',
      code: '#&# variable = 1;',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  private _codeCompletionMiniGameOptions: CodeCompletionMiniGameOption[] = [
    {
      id: '1',
      codeCompletionMiniGameId: '1',
      content: 'let',
      isCorrect: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      codeCompletionMiniGameId: '1',
      content: 'vaar',
      isCorrect: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      codeCompletionMiniGameId: '1',
      content: 'cost',
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

    // CREATE students
    await this.prisma.student.createMany({
      data: this._students,
      skipDuplicates: true,
    });

    // CREATE studentProgress
    await this.prisma.studentAnswer.createMany({
      data: this._studentProgress,
      skipDuplicates: true,
    });

    // CREATE studentLevelProgress
    await this.prisma.studentLevelProgress.createMany({
      data: this._studentLevelProgress,
      skipDuplicates: true,
    });

    console.log('Seeding completed!');
  }
}
