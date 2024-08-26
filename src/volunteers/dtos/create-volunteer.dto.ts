import { IsString, IsNotEmpty, IsBooleanString, Matches } from 'class-validator';

export class CreateVolunteerDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z\s]+$/, {
    message: 'O nome deve conter apenas letras e espaços.',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]+$/, {
    message: 'O telefone deve conter apenas números.',
  })
  telefone: string; 
  
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'A habilidade deve conter apenas letras, números e espaços.',
  })
  ability: string;

  @IsBooleanString()
  @IsNotEmpty()
  volunteerCourse: string;

  @IsBooleanString()
  @IsNotEmpty()
  signedTheTerm: string;

  
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9\s]+$/, {
    message: 'A habilidade deve conter apenas letras, números e espaços.',
  })  
  @IsBooleanString()
  personalDescription: string;

  @IsString()
  picture: string;
}