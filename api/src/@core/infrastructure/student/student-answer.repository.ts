import {
  CreateStudentAnswerDTO,
  UpdateStudentAnswerDTO,
} from '@domain/student/dto/student-answer.dto';
import { StudentAnswer } from '@domain/student/entity/student-answer.entity';
import { StudentAnswerFactory } from '@domain/student/factory/student-answer.factory';
import { IStudentAnswerRepository } from '@domain/student/repository/student-answer.repository';
import { PrismaService } from 'src/services/prisma.service';

export class StudentAnswerRepository implements IStudentAnswerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({
    answer,
    miniGameId,
    studentId,
  }: CreateStudentAnswerDTO): Promise<StudentAnswer | null> {
    const studentAnswer = await this.prisma.studentAnswer.create({
      data: {
        miniGame: {
          connect: {
            id: miniGameId,
          },
        },
        student: {
          connect: {
            id: studentId,
          },
        },
      },
    });

    if (typeof answer === 'boolean') {
      await this.prisma.trueFalseMiniGameStudentAnswer.create({
        data: {
          studentAnswerId: studentAnswer.id,
          answer: answer,
        },
      });
    } else if (typeof answer === 'string') {
      await this.prisma.codeCompletionMiniGameStudentAnswer.create({
        data: {
          studentAnswerId: studentAnswer.id,
          answer: answer,
        },
      });
    } else {
      answer.map(async (item) => {
        await this.prisma.codeOrderingMiniGameStudentAnswerOption.create({
          data: {
            studentAnswerId: studentAnswer.id,
            orderAnswer: item,
          },
        });
      });
    }

    const studentAnswerPopulated = await this.prisma.studentAnswer.findUnique({
      where: {
        id: studentAnswer.id,
      },
      include: {
        trueFalseMiniGameStudentAnswer: true,
        codeCompletionMiniGameStudentAnswer: true,
        codeOrderingMiniGameStudentAnswer: {
          include: {
            answer: true,
          },
        },
      },
    });

    return StudentAnswerFactory.convertOne(studentAnswerPopulated);
  }

  async findOneById(id: string): Promise<StudentAnswer | null> {
    const studentAnswer = await this.prisma.studentAnswer.findUnique({
      where: {
        id,
      },
      include: {
        codeCompletionMiniGameStudentAnswer: true,
        codeOrderingMiniGameStudentAnswer: {
          include: {
            answer: true,
          },
        },
        trueFalseMiniGameStudentAnswer: true,
      },
    });

    return StudentAnswerFactory.convertOne(studentAnswer);
  }

  async update({
    id,
    answer,
    miniGameId,
    studentId,
  }: UpdateStudentAnswerDTO): Promise<StudentAnswer | null> {
    const studentAnswer = await this.prisma.studentAnswer.update({
      where: {
        id,
      },
      data: {
        miniGame: {
          connect: {
            id: miniGameId,
          },
        },
        student: {
          connect: {
            id: studentId,
          },
        },
      },
    });

    if (typeof answer === 'boolean') {
      await this.prisma.trueFalseMiniGameStudentAnswer.update({
        where: {
          studentAnswerId: studentAnswer.id,
        },
        data: {
          answer: answer,
        },
      });
    } else if (typeof answer === 'string') {
      await this.prisma.codeCompletionMiniGameStudentAnswer.update({
        where: {
          studentAnswerId: studentAnswer.id,
        },
        data: {
          answer: answer,
        },
      });
    } else if (answer) {
      // Delete all options
      await this.prisma.codeOrderingMiniGameStudentAnswerOption.deleteMany({
        where: {
          studentAnswerId: studentAnswer.id,
        },
      });

      // Create new options
      answer.map(async (item) => {
        await this.prisma.codeOrderingMiniGameStudentAnswerOption.create({
          data: {
            studentAnswerId: studentAnswer.id,
            orderAnswer: item,
          },
        });
      });
    }

    const studentAnswerPopulated = await this.prisma.studentAnswer.findUnique({
      where: {
        id: studentAnswer.id,
      },
      include: {
        trueFalseMiniGameStudentAnswer: true,
        codeCompletionMiniGameStudentAnswer: true,
        codeOrderingMiniGameStudentAnswer: {
          include: {
            answer: true,
          },
        },
      },
    });

    return StudentAnswerFactory.convertOne(studentAnswerPopulated);
  }
}
