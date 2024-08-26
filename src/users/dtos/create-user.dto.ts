// src/users/dtos/create-user.dto.ts
import { IsNotEmpty, IsString, IsEnum, IsEmail } from 'class-validator';
import { Role } from '../../users/roles/roles.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  password: string;


  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Role, { message: 'Invalid role' })
  role: Role;
}
