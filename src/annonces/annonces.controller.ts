import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AnnoncesService } from './annonces.service';
import { CreateAnnonceDto } from './dto/create-annonce.dto';
import { UpdateAnnonceDto } from './dto/update-annonce.dto';
import { jwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';

@Controller('annonces')
export class AnnoncesController {
  constructor(private readonly annoncesService: AnnoncesService) {}

  // endpoint annonces/new
  @UseGuards(jwtGuard)
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

  // endpoint annonces/search/?q
  @Get('search')
  findQuery(
    @Query('q') query: string,
    @Query('price') price: number,
    @Query('brand') brand: string,
    @Query('yearofcirculation') yearofcirculation: number,
  ) {
    return this.annoncesService.findQuery({
      q: query,
      price,
      brand,
      yearofcirculation,
    });
  }

  //endpoint annonces/:id
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.annoncesService.findOne(+id);
  }

  @UseGuards(jwtGuard)
  @Patch(':id')
  update(
    @GetUser('id') userId: number,
    @Param('id') id: number,
    @Body() updateAnnonceDto: UpdateAnnonceDto,
  ) {
    return this.annoncesService.update(+id, updateAnnonceDto);
  }

  @UseGuards(jwtGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.annoncesService.remove(+id);
  }
}
