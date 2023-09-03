import { IsString, IsISO8601, IsNotEmpty } from 'class-validator';
export class CreateHoraireDto {
  @IsString()
  @IsNotEmpty()
  jourDeLaSemaine: string;

  @IsISO8601()
  @IsNotEmpty()
  openingAm: string;

  @IsISO8601()
  @IsNotEmpty()
  closingAm: string;

  @IsISO8601()
  @IsNotEmpty()
  openingPm: string;

  @IsISO8601()
  @IsNotEmpty()
  closingPm: string;
}
