import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';
import { GetUser } from '../auth/decorator';

@Injectable()
export class AnnoncesService {
  constructor(private prisma: PrismaService) {}

  async create(
    @GetUser('id') userId: number,
    createAnnonceDto: CreateAnnonceDto,
  ) {
    return this.prisma.annonce.create({
      data: {
        ...createAnnonceDto,
        author: {
          connect: { id: userId },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.annonce.findMany();
  }

  async findOne(id: number) {
    return this.prisma.annonce.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    console.log(updateAnnonceDto);
    return this.prisma.annonce.update({
      where: { id },
      data: { ...updateAnnonceDto },
    });
  }

  remove(id: number) {
    return this.prisma.annonce.delete({
      where: { id },
    });
  }
}
