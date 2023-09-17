import { ProgrammingLanguage } from '@prisma/client';
import { images } from './images';

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    name: 'JavaScript',
    description:
      'Este módulo introduz os fundamentos das variáveis, constantes e tipos de dados primitivos em JavaScript. Você irá aprender a declarar e manipular variáveis, compreender os diferentes tipos de dados, e explorar a conversão entre eles, adquirindo as bases essenciais para programar em JavaScript de forma eficaz.',
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '7506837e-3f60-4b11-99a0-98f131854999',
    imageId: images[0].id,
  },
  {
    name: 'Python',
    description:
      'Neste módulo, você mergulhará nos conceitos essenciais de variáveis e tipos de dados primitivos em Python. Aprenda a criar, atribuir valores e manipular variáveis, além de explorar os tipos de dados fundamentais, como inteiros, ponto flutuante, strings e booleanos. Ao final deste módulo, você terá uma sólida compreensão dos blocos de construção fundamentais da linguagem Python.',
    imageId: images[1].id,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 'e9a47ab3-5588-4c21-ad3e-aeff0e6fb6f3',
  },
];
