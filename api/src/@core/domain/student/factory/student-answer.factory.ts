import { StudentAnswer } from '../entity/student-answer.entity';

export type StudentAnswerType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  studentId: string;
  miniGameId: string;
  trueFalseMiniGameStudentAnswer?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    answer: boolean;
  } | null;
  codeCompletionMiniGameStudentAnswer?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    answer: string;
  } | null;
  codeOrderingMiniGameStudentAnswer?: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    answer: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      studentAnswerId: string;
      orderAnswer: number;
    }[];
  } | null;
};

export class StudentAnswerFactory {
  static convertOne(
    studentAnswer?: StudentAnswerType | null,
  ): StudentAnswer | null {
    if (!studentAnswer) return null;

    let answer: boolean | string | number[];

    if (studentAnswer.trueFalseMiniGameStudentAnswer) {
      answer = studentAnswer.trueFalseMiniGameStudentAnswer.answer;
    } else if (studentAnswer.codeCompletionMiniGameStudentAnswer) {
      answer = studentAnswer.codeCompletionMiniGameStudentAnswer.answer;
    } else if (studentAnswer.codeOrderingMiniGameStudentAnswer) {
      answer = studentAnswer.codeOrderingMiniGameStudentAnswer.answer.map(
        (answer) => answer.orderAnswer,
      );
    } else {
      answer = '';
    }

    const studentAnswerO = new StudentAnswer(
      studentAnswer.studentId,
      studentAnswer.miniGameId,
      answer,
      studentAnswer.id,
      studentAnswer.createdAt,
      studentAnswer.updatedAt,
    );

    return studentAnswerO;
  }

  static convertMany(studentProgresses: StudentAnswerType[]): StudentAnswer[] {
    return studentProgresses.map((studentProgress) => {
      return this.convertOne(studentProgress) as StudentAnswer;
    });
  }
}
