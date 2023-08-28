import { Injectable } from '@nestjs/common';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';

@Injectable()
export class AnnoncesService {
  create(createAnnonceDto: CreateAnnonceDto) {
    console.log(createAnnonceDto);
    return 'This action adds a new annonce';
  }

  findAll() {
    return `This action returns all annonces`;
  }

  findOne(id: number) {
    return `This action returns a #${id} annonce`;
  }

  update(id: number, updateAnnonceDto: UpdateAnnonceDto) {
    console.log(updateAnnonceDto);
    return `This action updates a #${id} annonce`;
  }

  remove(id: number) {
    return `This action removes a #${id} annonce`;
  }
}
