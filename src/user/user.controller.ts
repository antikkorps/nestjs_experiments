import { UserService } from './user.service';
import {
  Controller,
  Get,
  UseGuards,
  Patch,
  Delete,
  Body,
} from '@nestjs/common';
import { jwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator/';
import { EditUserDto } from './dto';

@UseGuards(jwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  // endpoint users/me
  @Get('me')
  getMe(
    @GetUser() user: User,
    @GetUser('email') email: string,
    @GetUser('role') role: string,
  ) {
    console.log({ email });
    console.log({ role });
    return user;
  }
  // endpoint users/all
  @Get('all')
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
  @Delete()
  deleteUser(@GetUser('id') userId: number) {
    return this.userService.deleteUser(userId);
  }
}
