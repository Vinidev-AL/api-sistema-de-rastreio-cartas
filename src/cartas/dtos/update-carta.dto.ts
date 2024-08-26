import { IsString, IsOptional, IsBooleanString, IsDate, IsNotEmpty } from 'class-validator';

export class UpdateCartaDto {
  @IsString()
  @IsOptional()
  nameOfKid?: string;

  @IsString()
  @IsOptional()
  nameOfPersonResponsible?: string;

  @IsString()
  @IsOptional()
  telefone?: string;

  @IsString()
  @IsOptional()
  cpfOfKid?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  cep?: string;

  @IsString()
  @IsOptional()
  codStatus: number

  @IsBooleanString()
  @IsOptional()
  isOccupied?: string;
}