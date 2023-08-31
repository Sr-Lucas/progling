import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { FindStudentByEmailUseCase } from '@application/student/find-by-email/find-student-by-email.usecase';
import { FindStudentByIdUseCase } from '@application/student/find-by-id/find-student-by-id.usecase';
import { CreateStudentUseCase } from '@application/student/create/create-student.usecase';
import { UpdateStudentUseCase } from '@application/student/update/update-student.usecase';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class StudentService {
  constructor(
    private readonly jwtService: JwtService,

    private readonly findStudentByEmailUseCase: FindStudentByEmailUseCase,
    private readonly findStudentByIdUseCase: FindStudentByIdUseCase,
    private readonly createStudentUseCase: CreateStudentUseCase,
    private readonly updateStudentUseCase: UpdateStudentUseCase,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.createStudentUseCase.execute(createStudentDto);
  }

  findOne(id: string) {
    return this.findStudentByIdUseCase.execute(id);
  }

  findOneByEmail(email: string) {
    return this.findStudentByEmailUseCase.execute(email);
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.updateStudentUseCase.execute({
      id,
      ...updateStudentDto,
    });
  }

  async signIn(email: string, pass: string) {
    const user = await this.findOneByEmail(email);

    if (!user || user.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.name };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.jwtService.signAsync(
        { ...payload, refresh: true },
        {
          expiresIn: '7d',
        },
      ),
      user,
    };
  }

  async refresh(refreshToken: string) {
    try {
      const payload = await this.jwtService.verifyAsync(refreshToken);

      if (!payload.refresh) {
        throw new UnauthorizedException();
      }

      return {
        accessToken: await this.jwtService.signAsync({
          sub: payload.sub,
          username: payload.username,
        }),
        refreshToken,
      };
    } catch (_) {
      throw new UnauthorizedException();
    }
  }
}
