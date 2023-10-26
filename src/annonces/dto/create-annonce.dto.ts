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

  @IsString()
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  kilometrage: number;

  @IsNumber()
  yearofcirculation: number;

  @IsBoolean()
  published: boolean;

  @IsBoolean()
  featured: boolean;

  @IsString()
  @IsNotEmpty()
  imageCover: string;

  @IsString()
  imageOne: string;

  @IsString()
  imageTwo: string;

  @IsString()
  imageThree: string;

  @IsOptional()
  author: object;
}
