import { IsNotEmpty, IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  purpose: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
