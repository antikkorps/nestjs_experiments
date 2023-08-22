import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return { msg: 'I am signup through service' };
  }
  signin() {
    return { msg: 'I am signup through service' };
  }
}
