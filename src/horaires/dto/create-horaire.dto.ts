import { IsString, IsISO8601, IsNotEmpty, IsBoolean } from 'class-validator';
export class CreateHoraireDto {
  @IsString()
  @IsNotEmpty()
  jourDeLaSemaine: string;

  @IsBoolean()
  @IsNotEmpty()
  ouvertureAm: boolean;

  @IsISO8601()
  @IsNotEmpty()
  openingAm: string;

  @IsISO8601()
  @IsNotEmpty()
  closingAm: string;

  @IsBoolean()
  @IsNotEmpty()
  ouverturePm: boolean;

  @IsISO8601()
  @IsNotEmpty()
  openingPm: string;

  @IsISO8601()
  @IsNotEmpty()
  closingPm: string;
}
