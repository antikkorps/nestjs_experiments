import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { ...dto },
    });
    delete user.password;
    return user;
  }
  async getAllUsers() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => {
      delete user.password;
      return user;
    });
  }
  async deleteUser(userId: number) {
    return this.prisma.user.delete({ where: { id: userId } });
  }
}
