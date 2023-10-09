import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentRepository } from '@infrastructure/student/student.repository';
import { PrismaService } from 'src/services/prisma.service';
import { FindStudentByIdUseCase } from '@application/student/find-by-id/find-student-by-id.usecase';
import { FindStudentByEmailUseCase } from '@application/student/find-by-email/find-student-by-email.usecase';
import { CreateStudentUseCase } from '@application/student/create/create-student.usecase';
import { UpdateStudentUseCase } from '@application/student/update/update-student.usecase';
import { HeartsRenovationUseCase } from '@application/student/hearts/hears_renovation.usecase';
import { BcryptAdapter } from 'src/@core/adapters/encrypter/bcrypt.adapter';
import { StreakHandlerUseCase } from '@application/student/streak/streak-handler.usecase';

@Module({
  controllers: [StudentController],
  providers: [
    {
      provide: PrismaService,
      useClass: PrismaService,
    },

    // ADAPTERS
    {
      provide: BcryptAdapter,
      useFactory: () => new BcryptAdapter(),
    },

    // REPOSITORY
    {
      provide: StudentRepository,
      useFactory: (prismaService) => new StudentRepository(prismaService),
      inject: [PrismaService],
    },

    // USE CASES
    {
      provide: FindStudentByIdUseCase,
      useFactory: (studentRepository) =>
        new FindStudentByIdUseCase(studentRepository),
      inject: [StudentRepository],
    },
    {
      provide: FindStudentByEmailUseCase,
      useFactory: (studentRepository) =>
        new FindStudentByEmailUseCase(studentRepository),
      inject: [StudentRepository],
    },
    {
      provide: CreateStudentUseCase,
      useFactory: (studentRepository, bcryptAdapter) =>
        new CreateStudentUseCase(studentRepository, bcryptAdapter),
      inject: [StudentRepository, BcryptAdapter],
    },
    {
      provide: UpdateStudentUseCase,
      useFactory: (studentRepository) =>
        new UpdateStudentUseCase(studentRepository),
      inject: [StudentRepository],
    },
    {
      provide: HeartsRenovationUseCase,
      useFactory: (studentRepository) =>
        new HeartsRenovationUseCase(studentRepository),
      inject: [StudentRepository],
    },
    {
      provide: StreakHandlerUseCase,
      useFactory: (studentRepository) =>
        new StreakHandlerUseCase(studentRepository),
      inject: [StudentRepository],
    },

    // SERVICE
    StudentService,
  ],
  exports: [StudentService],
})
export class StudentModule {}
