import { IsString, IsNotEmpty, IsBooleanString, IsUUID, isDateString, isString, IsDate, IsNumber } from 'class-validator';

export class CreateCartaDto {
  @IsString()
  @IsNotEmpty()
  nameOfKid: string;

  @IsString()
  @IsNotEmpty()
  nameOfPersonResponsible: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  cpfOfKid: string

  @IsDate()
  @IsNotEmpty()
  dateOfBirth: Date


  @IsString()
  @IsNotEmpty()
  address: string

  @IsString()
  @IsNotEmpty()
  city: string

  @IsString()
  @IsNotEmpty()
  cep: string

  @IsNumber()
  @IsNotEmpty()
  codStatus: number

  @IsBooleanString()
  @IsNotEmpty()
  isOccupied: string;
}