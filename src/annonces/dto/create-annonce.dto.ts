import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateAnnonceDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  kilometrage: number;

  @IsNumber()
  yearofcirculation: number;

  @IsBoolean()
  published: boolean;

  @IsOptional()
  author: object;
}