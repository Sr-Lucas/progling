import { StudentLevelProgress } from '@prisma/client';
import { StudentLevelProgress as LevelProgress } from '../entity/student-level-progress.entity';

export class StudentLevelProgressFactory {
  static convertOne(studentLevelProgress: StudentLevelProgress) {
    return new LevelProgress(
      studentLevelProgress.studentId,
      studentLevelProgress.levelId,
      studentLevelProgress.id,
      studentLevelProgress.createdAt,
      studentLevelProgress.updatedAt,
    );
  }

  static convertMany(studentLevelProgresses: StudentLevelProgress[]) {
    return studentLevelProgresses.map((studentLevelProgress) =>
      this.convertOne(studentLevelProgress),
    );
  }
}
