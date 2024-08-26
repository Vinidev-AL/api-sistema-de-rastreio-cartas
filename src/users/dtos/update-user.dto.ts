import { IsString, IsEmail, IsOptional, IsIn, IsEnum } from 'class-validator';
import { Role } from '../../users/roles/roles.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @IsEnum(Role, { message: 'Invalid role' })
  role?: Role;
}