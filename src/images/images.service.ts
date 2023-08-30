import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from '../prisma/prisma.service';
import { GetUser } from '../auth/decorator';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}
  async create(@GetUser('id') userId: number, createImageDto: CreateImageDto) {
    return this.prisma.image.create({
      data: {
        ...createImageDto,
      },
    });
  }

  findAll() {
    return this.prisma.image.findMany();
  }

  findOne(id: number) {
    return this.prisma.image.findUnique({
      where: { id },
    });
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.prisma.image.update({
      where: { id },
      data: { ...updateImageDto },
    });
  }

  remove(id: number) {
    return this.prisma.image.delete({
      where: { id },
    });
  }
}
