import { Controller, Get, UseGuards, Patch } from '@nestjs/common';
import { jwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  // endpoint users/me
  @Get('me')
  getMe(@GetUser() user: User, @GetUser('email') email: string) {
    console.log({ email });
    return user;
  }
  @Patch()
  editUser() {}
}
