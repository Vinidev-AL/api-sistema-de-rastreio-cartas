import { IsString, IsNotEmpty, IsBooleanString, IsUUID } from 'class-validator';

export class CreateCartaDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  picture: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBooleanString()
  @IsNotEmpty()
  isOccupied: string;

  @IsUUID()
  @IsNotEmpty()
  volunteerId: string; // ID do voluntário associado
}