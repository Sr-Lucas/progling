import {
  CreateStudentDTO,
  UpdateStudentRepositoryDTO,
} from '@domain/student/dto/student.dto';
import { Student } from '@domain/student/entity/student.entity';
import { StudentFactory } from '@domain/student/factory/student.factory';
import { IStudentRepository } from '@domain/student/repository/student.repository';
import { PrismaService } from 'src/services/prisma.service';

export class StudentRepository implements IStudentRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({
    email,
    name,
    password,
  }: CreateStudentDTO): Promise<Student | null> {
    const student = await this.prisma.student.create({
      data: {
        name,
        email,
        password,
      },
    });

    return StudentFactory.convertOne(student);
  }

  async findOneByEmail(email: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({
      where: {
        email,
      },
    });

    return StudentFactory.convertOne(student);
  }

  async findOneById(id: string): Promise<Student | null> {
    const student = await this.prisma.student.findUnique({
      where: {
        id,
      },
    });

    return StudentFactory.convertOne(student);
  }

  async update({
    id,
    name,
    email,
    hearts,
    heartsRenewAt,
    streak,
    streakRenewAt,
  }: UpdateStudentRepositoryDTO): Promise<Student | null> {
    const student = await this.prisma.student.update({
      where: {
        id,
      },
      data: {
        name,
        email,
        hearts,
        heartsRenewAt,
        streak,
        streakRenewAt,
      },
    });

    return StudentFactory.convertOne(student);
  }

  async softDelete(id: string): Promise<void> {
    await this.prisma.student.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}
