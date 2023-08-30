import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Public } from 'src/auth/decorators/public-route.decorator';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('auth/student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Public()
  @Post('register')
  async create(@Body() createStudentDto: CreateStudentDto) {
    await this.studentService.create(createStudentDto);
    const auth = await this.studentService.signIn(
      createStudentDto.email,
      createStudentDto.password,
    );

    return auth;
  }

  @Get('me')
  findOne(@User() user: User) {
    return this.studentService.findOne(user.sub);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post()
  signIn(@Body() signInDto: Record<string, any>) {
    return this.studentService.signIn(signInDto.email, signInDto.password);
  }
}
