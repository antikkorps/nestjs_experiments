import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    // Generate the password hash
    const password = await argon.hash(dto.password);
    // Save the new user in the db

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          password,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      //return the saved user
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Cet email est déjà enregistré');
        }
      }
      throw error;
    }

    return { msg: 'I am signup through service' };
  }
  signin() {
    return { msg: 'I am signup through service' };
  }
}
