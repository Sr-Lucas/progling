import { Body, Controller, Param, Post, Delete } from '@nestjs/common';
import { MiniGameService } from './minigame.service';
import { RegisterAnswerDTO } from './dto/register-answer.dto';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('mini-games')
export class MiniGameController {
  constructor(private readonly miniGameService: MiniGameService) {}

  @Post(':id/register-answer')
  async registerAnswer(
    @User() user: User,
    @Param('id') id: string,
    @Body() body: RegisterAnswerDTO,
  ) {
    return this.miniGameService.registerAnswer(id, user.sub, body);
  }

  @Delete('levels/:id/delete-answer')
  async deleteAllAnswerByLevel(@Param('id') id: string, @User() user: User) {
    return this.miniGameService.deleteAllAnswerByLevel(id, user.sub);
  }
}
