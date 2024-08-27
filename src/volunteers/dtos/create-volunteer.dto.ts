import { IsString, IsNotEmpty, IsBooleanString, Matches, IsNumber, IsEnum } from 'class-validator';
import { Role } from '../../users/roles/roles.enum';

export class CreateVolunteerDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'O nome deve conter apenas letras e espaços.',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{11}$/, { message: 'CPF must be 11 digits' }) // Validação para CPF
  cpf: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, {
    message: 'O telefone deve conter apenas números.',
  })
  telefone: string; 
  
  @IsNumber()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'A tempo de meses deve conter números',
  })
  tempoMeses: number;
  
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'A persona deve conter apenas letras, números e espaços.',
  })  
  @IsBooleanString()
  personalDescription: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9\s]+$/, { message: 'A cidade deve conter apenas letras, números e espaços.'})
  city: string;

  @IsString()
  picture: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Role, { message: 'Invalid role' })
  role: Role;
  
}