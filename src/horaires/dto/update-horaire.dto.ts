import { PartialType } from '@nestjs/mapped-types';
import { CreateHoraireDto } from './create-horaire.dto';

export class UpdateHoraireDto extends PartialType(CreateHoraireDto) {}
