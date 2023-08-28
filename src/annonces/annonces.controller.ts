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
import { jwtGuard } from 'src/auth/guard';

@UseGuards(jwtGuard)
@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annoncesService: AnnoncesService) {}

  // endpoint annonces/new
  @Post('new')
  create(@Body() createAnnonceDto: CreateAnnonceDto) {
    return this.annoncesService.create(createAnnonceDto);
  }

  // endpoint annonces/all
  @Get('all')
  findAll() {
    return this.annoncesService.findAll();
  }

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
