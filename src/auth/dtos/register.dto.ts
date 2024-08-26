import { IsString, IsEmail, IsNotEmpty, Matches, IsIn, IsEnum } from 'class-validator';
import { Role } from '../../users/roles/roles.enum';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[0-9]+$/, {
    message: 'O CPF deve conter apenas números.',
  })
  cpf: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'O nome de usuário deve conter apenas letras e números.',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'O endereço deve conter apenas letras, números e espaços.',
  })

  address: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-zA-Z0-9.@]+$/, {
    message: 'O e-mail deve conter apenas letras, números, "@" e ".".',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Role, { message: 'Invalid role' })
  role: Role;
}