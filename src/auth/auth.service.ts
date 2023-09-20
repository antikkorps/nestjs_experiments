import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

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
  }
  async signin(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    //if user does not exist throw exception
    if (!user)
      throw new ForbiddenException('Utilisateur et/ou mot de passe incorrects');
    //compare password
    const passwordMatches = await argon.verify(user.password, dto.password);
    //if password incorrect, throw an exception
    if (!passwordMatches)
      throw new ForbiddenException('Utilisateur et/ou mot de passe incorrects');
    return this.signToken(user.id, user.email);
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: secret,
    });

    return { access_token: token };
  }
  async validateUser(token: string): Promise<boolean> {
    try {
      const secret = this.config.get('JWT_SECRET');
      const decodedToken = await this.jwt.verifyAsync(token, {
        secret: secret,
      });
      console.log(token);
      console.log(decodedToken);
      return decodedToken;
    } catch (error) {
      throw new ForbiddenException('Invalid token');
    }
  }
}
