import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AnnoncesService } from './annonces.service';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';
import { jwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';

@UseGuards(jwtGuard)
@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annoncesService: AnnoncesService) {}

  // endpoint annonces/new
  @Post('new')
  create(
    @GetUser('id') userId: number,
    @Body() createAnnonceDto: CreateAnnonceDto,
  ) {
    return this.annoncesService.create(userId, createAnnonceDto);
  }

  // endpoint annonces/all
  @Get('all')
  findAll() {
    return this.annoncesService.findAll();
  }

  //endpoint annonces/:id
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.annoncesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateAnnonceDto: UpdateAnnonceDto) {
    return this.annoncesService.update(+id, updateAnnonceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.annoncesService.remove(+id);
  }
}
