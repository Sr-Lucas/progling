import { Level } from '@prisma/client';
import { modules } from './modules';

export const levels: Level[] = [
  /**
   * Javascript
   */
  {
    name: '1.1 O que é o JavaScript',
    description:
      'Neste nível introdutório, você será apresentado ao JavaScript e sua importância no desenvolvimento web.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '1465f146-ebaf-4a12-abda-d9281a37c386',
    moduleId: modules[0].id,
    orderNumber: 0,
  },
  {
    name: '1.2 Variáveis e Constantes',
    description:
      'Aprofunde-se no conceito de variáveis e constantes em JavaScript e como elas são usadas para armazenar informações dinâmicas e imutáveis.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'cf0b1973-9277-4f70-8f80-a6b5bf33576a',
    moduleId: modules[0].id,
    orderNumber: 1,
  },
  // {
  //   name: '1.3 Tipos de Dados Primitivos',
  //   description:
  //     'Explore os tipos de dados primitivos em JavaScript, incluindo números, strings, booleanos e saiba como usá-los em seus programas.',
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   id: '6a3ca00b-a4da-4057-b005-f2f2110b0ba8',
  //   moduleId: modules[0].id,
  //   orderNumber: 2,
  // },
  // {
  //   name: '1.4 Conversão de Tipos de Dados',
  //   description:
  //     'Aprenda a converter entre diferentes tipos de dados em JavaScript para manipular informações de maneira flexível.',
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  //   id: 'dcade942-aaa3-4a09-801f-5f8729f1f66e',
  //   moduleId: modules[0].id,
  //   orderNumber: 3,
  // },
  {
    name: '2.1 Declarações Condicionais (if, else if, else)',
    description:
      'Domine o uso de declarações condicionais em JavaScript para criar lógica baseada em condições.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'ec416a7d-6c14-465f-8b37-22ba48c4c836',
    moduleId: modules[1].id,
    orderNumber: 0,
  },
  {
    name: '2.2 Estruturas de Repetição (for, while, do...while)',
    description:
      'Aprenda a automatizar tarefas com estruturas de repetição em JavaScript.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'f06d24cd-086e-4eae-a797-26a0172f3750',
    moduleId: modules[1].id,
    orderNumber: 1,
  },
  {
    name: '2.3 Switch e Operador Ternário',
    description:
      'Explore as estruturas switch e o operador ternário para controlar o fluxo de seu código JavaScript.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '9cfa3326-866d-4abd-a83d-3b22f15e84d2',
    moduleId: modules[1].id,
    orderNumber: 2,
  },
  {
    name: '3.1 Criando Funções',
    description:
      'Neste nível, você aprenderá a criar funções em JavaScript, essenciais para a modularização e reutilização de código.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '7e870b5f-6bb6-4c66-9ceb-b4a46392f6e7',
    moduleId: modules[2].id,
    orderNumber: 0,
  },
  {
    name: '3.2 Parâmetros e Argumentos',
    description:
      'Explore como trabalhar com parâmetros e argumentos em funções JavaScript para tornar seus programas mais flexíveis.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '4aad81d8-cd08-41ca-964e-a7291925624a',
    moduleId: modules[2].id,
    orderNumber: 1,
  },
  {
    name: '3.3 Escopo de Variáveis',
    description:
      'Compreenda o escopo de variáveis em JavaScript e como ele afeta o acesso e a visibilidade das variáveis em suas funções.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '9e803eb1-c920-415a-b075-79fcee4f55b6',
    moduleId: modules[2].id,
    orderNumber: 2,
  },
  {
    name: '3.4 Retorno de Valores',
    description:
      'Aprenda a usar o retorno de valores em funções JavaScript para fornecer resultados calculados ou processados.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '52ae1a09-8e12-4918-bbbe-99f02387463f',
    moduleId: modules[2].id,
    orderNumber: 3,
  },
  {
    name: '4.1 Arrays: Criação, Manipulação e Iteração',
    description:
      'Neste nível, explore arrays em JavaScript, incluindo como criá-los, manipulá-los e iterar através de seus elementos.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '1337199b-d6f8-41e2-8432-1420cd4e8b8a',
    moduleId: modules[3].id,
    orderNumber: 0,
  },
  {
    name: '4.2 Objetos: Propriedades e Métodos',
    description:
      'Aprofunde-se no mundo dos objetos JavaScript, incluindo suas propriedades e como criar métodos para manipulá-los.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'daa3b09d-bdda-41cc-b358-829dd58cbc76',
    moduleId: modules[3].id,
    orderNumber: 1,
  },
  {
    name: '4.3 JSON (JavaScript Object Notation)',
    description:
      'Aprenda sobre JSON, uma notação popular para serializar dados em JavaScript e trocá-los com servidores.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '95ce53a0-4617-4f92-a640-dda7de977103',
    moduleId: modules[3].id,
    orderNumber: 2,
  },
  {
    name: '5.1 Eventos de Usuário',
    description:
      'Neste nível, você aprenderá a lidar com eventos de usuário em JavaScript, tornando suas páginas web interativas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'aa3b18a3-9a91-4c91-98ea-1ea3ecd32cd7',
    moduleId: modules[4].id,
    orderNumber: 0,
  },
  {
    name: '5.2 Selecionando Elementos HTML',
    description:
      'Descubra como selecionar elementos HTML em suas páginas usando JavaScript para manipulá-los dinamicamente.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'a4d5aea9-d3d6-4779-a776-c97af3b3e985',
    moduleId: modules[4].id,
    orderNumber: 1,
  },
  {
    name: '5.3 Modificando o Conteúdo do DOM',
    description:
      'Aprenda a modificar o conteúdo do DOM (Document Object Model) em tempo real usando JavaScript para criar experiências dinâmicas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'a1ee0f85-b9bb-4978-8fec-6efaf2deb005',
    moduleId: modules[4].id,
    orderNumber: 2,
  },
  {
    name: '5.4 Event Delegation',
    description:
      'Explore o conceito de event delegation em JavaScript para lidar com eventos em elementos dinâmicos e otimizar seu código.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '38aa0ecf-9d63-4058-9827-1446de892560',
    moduleId: modules[4].id,
    orderNumber: 3,
  },
  {
    name: '6.1 Introdução ao AJAX',
    description:
      'Neste nível, você será apresentado ao AJAX (Asynchronous JavaScript and XML) e como realizar requisições assíncronas em JavaScript.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'e63bf304-09ca-4396-a97a-e78fd34a7b7c',
    moduleId: modules[5].id,
    orderNumber: 0,
  },
  {
    name: '6.2 Requisições GET e POST',
    description:
      'Aprenda a realizar requisições GET e POST com AJAX para buscar e enviar dados de forma assíncrona.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'dacac6ed-a777-42f6-a019-ce25a734a967',
    moduleId: modules[5].id,
    orderNumber: 1,
  },
  {
    name: '6.3 Tratamento de Respostas',
    description:
      'Compreenda como lidar com as respostas de requisições AJAX e atualizar dinamicamente o conteúdo de suas páginas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '2a7ff6cd-a870-4235-b04f-a9420e055ad0',
    moduleId: modules[5].id,
    orderNumber: 2,
  },
  {
    name: '7.1 Tratamento de Erros (try...catch)',
    description:
      'Aprenda a lidar com erros em JavaScript usando blocos try...catch para manter suas aplicações estáveis.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'b4b23946-1283-46f4-aaa0-f99e8239af31',
    moduleId: modules[6].id,
    orderNumber: 0,
  },
  {
    name: '7.2 Lançamento de Exceções Personalizadas',
    description:
      'Explore como lançar exceções personalizadas em JavaScript para comunicar erros de forma clara em seus programas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '01790306-6b9c-4186-b719-4707ae4bd4fe',
    moduleId: modules[6].id,
    orderNumber: 1,
  },
  {
    name: '8.1 Variáveis let e const',
    description:
      'Este nível introduz as variáveis let e const, bem como suas diferenças e como usá-las em JavaScript ES6+.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'eedf7950-972a-4ca0-81e1-f4f637adcdbb',
    moduleId: modules[7].id,
    orderNumber: 0,
  },
  {
    name: '8.2 Arrow Functions',
    description:
      'Aprenda a criar funções de flecha (arrow functions) em JavaScript ES6+ para uma sintaxe mais concisa.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '31133d6d-0585-4ec4-ba1c-f5c70ab41128',
    moduleId: modules[7].id,
    orderNumber: 1,
  },
  {
    name: '8.3 Template Literals',
    description:
      'Explore as template literals em JavaScript ES6+ para criar strings interpoladas de forma mais eficiente.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '8d606fe0-9fe3-4779-86c4-e0eebe093bae',
    moduleId: modules[7].id,
    orderNumber: 2,
  },
  {
    name: '8.4 Destructuring',
    description:
      'Aprenda a usar a desestruturação (destructuring) em JavaScript ES6+ para extrair valores de objetos e arrays de forma simples.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '1798380f-a61a-4688-87ed-9eca051d8cc2',
    moduleId: modules[7].id,
    orderNumber: 3,
  },
  {
    name: '8.5 Classes e Módulos',
    description:
      'Explore as classes e módulos em JavaScript ES6+ para criar código mais organizado e reutilizável.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '6e049689-b8a9-46c0-9df2-7bca5e3c5460',
    moduleId: modules[7].id,
    orderNumber: 4,
  },

  /**
   * Python
   */

  // Module 1
  {
    name: '1.1 Introdução ao Python',
    description:
      'Neste nível introdutório, você será apresentado ao Python e sua importância no desenvolvimento de aplicativos e automação.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '1465f146-ebaf-4a12-abda-d9281a37c387',
    moduleId: modules[8].id,
    orderNumber: 0,
  },
  {
    name: '1.2 Variáveis e Constantes em Python',
    description:
      'Aprofunde-se no conceito de variáveis e constantes em Python e como elas são usadas para armazenar informações dinâmicas e imutáveis.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'cf0b1973-9277-4f70-8f80-a6b5bf33576b',
    moduleId: modules[8].id,
    orderNumber: 1,
  },
  {
    name: '1.3 Tipos de Dados Primitivos em Python',
    description:
      'Explore os tipos de dados primitivos em Python, incluindo números, strings, booleanos, e saiba como usá-los em seus programas.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '6a3ca00b-a4da-4057-b005-f2f2110b0ba9',
    moduleId: modules[8].id,
    orderNumber: 2,
  },
  {
    name: '1.4 Conversão de Tipos de Dados em Python',
    description:
      'Aprenda a converter entre diferentes tipos de dados em Python para manipular informações de maneira flexível.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'dcade942-aaa3-4a09-801f-5f8729f1f66f',
    moduleId: modules[8].id,
    orderNumber: 3,
  },

  // Module 2
  {
    name: '2.1 Declarações Condicionais em Python',
    description:
      'Domine o uso de declarações condicionais em Python, como if, elif e else, para criar lógica baseada em condições.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'ec416a7d-6c14-465f-8b37-22ba48c4c837',
    moduleId: modules[9].id,
    orderNumber: 0,
  },
  {
    name: '2.2 Estruturas de Repetição em Python',
    description:
      'Aprenda a automatizar tarefas com estruturas de repetição em Python, como for, while e do...while.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'f06d24cd-086e-4eae-a797-26a0172f3751',
    moduleId: modules[9].id,
    orderNumber: 1,
  },
];
