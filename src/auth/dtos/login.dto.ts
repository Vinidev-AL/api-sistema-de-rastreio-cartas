import { IsString, Matches } from 'class-validator';

export class LoginDto {
  @IsString()
  @Matches(/^[0-9]+$/, {
    message: 'O CPF deve conter apenas números.',
  })
  cpf: string;

  @IsString()
  password: string;
}