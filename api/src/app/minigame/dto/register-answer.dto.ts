import { IsNotEmpty } from 'class-validator';

export class RegisterAnswerDTO {
  @IsNotEmpty()
  answer: boolean | string | number[];
}
