import { Student } from '../entity/student.entity';

export type StudentType = {
  id: string;
  name: string;
  email: string;
  hearts: number;
  heartsRenewAt: Date | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export class StudentFactory {
  static convertOne(student?: StudentType | null): Student | null {
    if (!student) return null;

    return new Student(
      student.name,
      student.email,
      student.password,
      student.hearts,
      student.heartsRenewAt,
      student.id,
      student.createdAt,
      student.updatedAt,
    );
  }

  static convertMany(students: StudentType[]): Student[] {
    return students.map((student) => this.convertOne(student)!);
  }
}
