import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHoraireDto } from './dto/create-horaire.dto';
import { UpdateHoraireDto } from './dto/update-horaire.dto';

@Injectable()
export class HorairesService {
  constructor(private prisma: PrismaService) {}

  async create(createHoraireDto: CreateHoraireDto) {
    return this.prisma.horaire.create({
      data: {
        ...createHoraireDto,
      },
    });
  }

  findAll() {
    return this.prisma.horaire.findMany();
  }

  findOne(id: number) {
    return this.prisma.horaire.findUnique({ where: { id } });
  }

  update(id: number, updateHoraireDto: UpdateHoraireDto) {
    return this.prisma.horaire.update({
      where: { id },
      data: { ...updateHoraireDto },
    });
  }

  remove(id: number) {
    return this.prisma.horaire.delete({
      where: { id },
    });
  }
}
