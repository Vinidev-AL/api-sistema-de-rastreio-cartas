// src/users/dtos/update-user.dto.ts
import { IsString, IsOptional, IsEnum, Matches } from 'class-validator';
import { Role } from '../../users/roles/roles.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Matches(/^\d{11}$/, { message: 'CPF must be 11 digits' }) // Validação para CPF
  cpf: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  @IsEnum(Role, { message: 'Invalid role' })
  role: Role;
}