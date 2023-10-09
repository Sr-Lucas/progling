import { Student } from '@prisma/client';

export const students: Student[] = [
  {
    id: '8c7f370a-7a03-468c-9697-05acc34cfd7d',
    email: 'lucas@teste.tst',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'John Doe',
    password: 'Teste123@',
    deletedAt: null,
    hearts: 5,
    streak: 0,
    streakRenewAt: new Date(),
    heartsRenewAt: new Date(),
    streakResetAt: new Date(),
  },
];
