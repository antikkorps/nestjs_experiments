import {
  IsString,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

export class CreateImageDto {
  @IsString()
  @IsOptional()
  name;

  @IsString()
  @IsNotEmpty()
  url;

  @IsBoolean()
  featuredImage;

  @IsInt()
  @IsNotEmpty()
  AnnonceId;
}
