import { IsString, IsOptional, Matches } from 'class-validator';

export class UpdateVolunteerDto {
  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'O nome deve conter apenas letras e espaços.',
  })
  name?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[0-9]+$/, {
    message: 'O telefone deve conter apenas números.',
  })
  telefone?: string;

  @IsOptional()
  @IsString()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'A habilidade deve conter apenas letras, números e espaços.',
  })
  ability?: string;  

  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'A opção deve conter apenas letras',
  })
  @IsOptional()
  @IsString()
  volunteerCourse?: string;

  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'A o termo deve conter apenas letras',
  })
  @IsOptional()
  @IsString()
  signedTheTerm?: string;

  @IsString()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'A habilidade deve conter apenas letras, números e espaços.',
  })
  @IsOptional()
  @IsString()
  personalDescription?: string;

  @IsOptional()
  @IsString()
  picture?: string;
}