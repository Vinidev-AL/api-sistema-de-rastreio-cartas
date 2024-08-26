import { IsString, IsOptional, IsBooleanString, IsUUID } from 'class-validator';

export class UpdateCartaDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  picture?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBooleanString()
  @IsOptional()
  isOccupied?: string;

  @IsUUID()
  @IsOptional()
  volunteerId?: string; // ID do voluntário associado
}