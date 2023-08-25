import { StudentProgress } from '../entity/student-progress.entity';

type StudentProgressType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  correct: boolean;
  studentId: string;
  miniGameId: string;
};

export class StudentProgressFactory {
  static convertOne(
    studentProgress?: StudentProgressType | null,
  ): StudentProgress | null {
    if (!studentProgress) return null;

    const studentProgressO = new StudentProgress(
      studentProgress.studentId,
      studentProgress.miniGameId,
      studentProgress.correct,
      studentProgress.id,
      studentProgress.createdAt,
      studentProgress.updatedAt,
    );

    return studentProgressO;
  }

  static convertMany(
    studentProgresses: StudentProgressType[],
  ): StudentProgress[] {
    return studentProgresses.map((studentProgress) => {
      return this.convertOne(studentProgress) as StudentProgress;
    });
  }
}
