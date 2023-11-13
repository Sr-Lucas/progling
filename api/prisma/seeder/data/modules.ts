import { Module } from '@prisma/client';
import { programmingLanguages } from './languages';

export const modules: Module[] = [
  // Javascript
  {
    name: 'Variáveis e Tipos de Dados em JavaScript',
    description:
      'Neste módulo, você explorará os pilares fundamentais do JavaScript. Aprenda a declarar variáveis, entender suas diferenças em relação a constantes e como elas armazenam informações dinâmicas. Descubra como os tipos de dados primitivos, como números inteiros, números de ponto flutuante, strings e booleanos, são essenciais para representar informações em programas JavaScript. Domine a conversão de tipos e adquira as bases para desenvolver aplicações web flexíveis e robustas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '0cc207e4-1205-4f34-94df-4abefd770631',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 0,
  },
  {
    name: 'Estruturas de Controle em JavaScript',
    description:
      'Neste módulo, você mergulhará no controle do fluxo de programas JavaScript. Explore declarações condicionais, como if, else if e else, para criar lógica condicional. Aprenda a usar estruturas de repetição, como for, while e do...while, para automatizar tarefas e iterações. Compreenda o poder dessas estruturas para criar aplicações web dinâmicas e responsivas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'd0eb4677-9333-4397-964f-b692b4bce84c',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 1,
  },
  {
    name: 'Funções em JavaScript',
    description:
      'Este módulo é uma introdução ao mundo das funções em JavaScript. Aprenda a criar funções, passar argumentos, retornar valores e compreender o escopo de variáveis. Desenvolva habilidades fundamentais para organizar e reutilizar seu código JavaScript em aplicações web dinâmicas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '9f1046d7-7a3a-4545-a11f-a8afadb9e609',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 2,
  },
  {
    name: 'Arrays e Objetos em JavaScript',
    description:
      'Explore a manipulação de dados em JavaScript com este módulo. Aprenda a criar, acessar e modificar arrays para armazenar coleções de informações. Descubra como usar objetos para representar estruturas de dados mais complexas. Essas habilidades são fundamentais para o desenvolvimento de aplicações web interativas e dinâmicas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'a602a528-4326-446a-b81e-75c875d5728b',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 3,
  },
  {
    name: 'Eventos e Manipulação do DOM',
    description:
      'Neste módulo, você mergulhará no mundo da interatividade em páginas web. Aprenda a lidar com eventos de usuário, selecionar elementos HTML e modificar o conteúdo do DOM (Document Object Model). Adquira as habilidades necessárias para criar interfaces web dinâmicas e responsivas com JavaScript.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'a80451d8-9d66-4ef6-98af-13fe5d36e4ed',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 4,
  },
  {
    name: 'Comunicação com o Servidor em JavaScript',
    description:
      'Neste módulo, você explorará a comunicação assíncrona com servidores web usando JavaScript. Aprenda a fazer requisições AJAX (Asynchronous JavaScript and XML), processar respostas e atualizar dinamicamente o conteúdo de suas páginas web. Essa habilidade é fundamental para criar aplicativos web modernos e responsivos.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'cd575bcf-6b7a-42aa-b90d-9a1ddbd81e2e',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 5,
  },
  {
    name: 'Manipulação de Exceções em JavaScript',
    description:
      'Este módulo aborda a gestão de erros em JavaScript. Aprenda a lidar com exceções usando try...catch, lançar exceções personalizadas e garantir a robustez do seu código. Essas habilidades são cruciais para garantir que suas aplicações JavaScript funcionem de maneira confiável.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '57f06ec3-70b2-4a16-8b13-b1593563dcfd',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 6,
  },
  {
    name: 'Introdução a ES6+ e Novos Recursos',
    description:
      'Explore os recursos mais recentes do JavaScript neste módulo. Aprenda sobre variáveis let e const, funções de flecha, literais de modelo, desestruturação, classes e módulos. Domine as técnicas modernas para tornar seu código JavaScript mais eficiente e legível.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '55533e8d-e2d7-4b26-ae41-ba2465b103f1',
    programmingLanguageId: programmingLanguages[0].id,
    orderNumber: 7,
  },

  // Python
  {
    name: 'Variáveis e Tipos de Dados em Python',
    description:
      'Neste módulo, você explorará os conceitos fundamentais de variáveis e tipos de dados em Python.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '0cc207e4-1205-4f34-94df-4abefd770632',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 0,
  },
  {
    name: 'Estruturas de Controle em Python',
    description:
      'Neste módulo, você mergulhará nas estruturas de controle em Python. Explore declarações condicionais, como if, elif e else, para criar lógica condicional.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'd0eb4677-9333-4397-964f-b692b4bce84d',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 1,
  },
  {
    name: 'Funções em Python',
    description: 'Este módulo é uma introdução ao mundo das funções em Python.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '9f1046d7-7a3a-4545-a11f-a8afadb9e610',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 2,
  },
  {
    name: 'Listas e Dicionários em Python',
    description: 'Explore a manipulação de dados em Python com este módulo.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'a602a528-4326-446a-b81e-75c875d5728c',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 3,
  },
  {
    name: 'Tratamento de Exceções em Python',
    description:
      'Este módulo aborda a gestão de erros em Python. Aprenda a lidar com exceções usando try...except, lançar exceções personalizadas e garantir a robustez do seu código.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '57f06ec3-70b2-4a16-8b13-b1593563dcfe',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 4,
  },
  {
    name: 'Bibliotecas e Módulos em Python',
    description:
      'Neste módulo, você explorará o uso de bibliotecas e módulos em Python para estender a funcionalidade da linguagem. Aprenda a importar e utilizar bibliotecas populares para tarefas como manipulação de dados, visualização e muito mais. Domine a arte de reutilizar código Python existente para acelerar o desenvolvimento de seus aplicativos.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '55533e8d-e2d7-4b26-ae41-ba2465b103f2',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 5,
  },
  {
    name: 'Introdução a Python 3.8+ e Recursos Modernos',
    description:
      'Explore os recursos mais recentes do Python neste módulo. Aprenda sobre as funcionalidades adicionadas nas versões recentes, como f-strings, tipagem de variáveis, expressões lambda e muito mais. Domine as técnicas modernas para tornar seu código Python mais eficiente e legível.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '55533e8d-e2d7-4b26-ae41-ba2465b103f3',
    programmingLanguageId: programmingLanguages[1].id,
    orderNumber: 6,
  },
];
