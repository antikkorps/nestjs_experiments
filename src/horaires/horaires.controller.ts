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
import { HorairesService } from './horaires.service';
import { CreateHoraireDto } from './dto/create-horaire.dto';
import { UpdateHoraireDto } from './dto/update-horaire.dto';
import { jwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';

@Controller('horaires')
export class HorairesController {
  constructor(private readonly horairesService: HorairesService) {}

  //endpoint horaires/new
  @UseGuards(jwtGuard)
  @Post('new')
  create(
    @GetUser('id') userId: number,
    @Body() createHoraireDto: CreateHoraireDto,
  ) {
    return this.horairesService.create(createHoraireDto);
  }

  //endpoint horaires/all
  @Get('all')
  findAll() {
    return this.horairesService.findAll();
  }

  //endpoint horaires/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.horairesService.findOne(+id);
  }

  @UseGuards(jwtGuard)
  @Patch(':id')
  update(
    @GetUser('id') userId: number,
    @Param('id') id: string,
    @Body() updateHoraireDto: UpdateHoraireDto,
  ) {
    return this.horairesService.update(+id, updateHoraireDto);
  }

  @UseGuards(jwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.horairesService.remove(+id);
  }
}
