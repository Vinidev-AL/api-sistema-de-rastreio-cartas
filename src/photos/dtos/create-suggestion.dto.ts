import { IsString, IsNotEmpty } from 'class-validator';

export class CreateSuggestionDto {
  @IsString()
  @IsNotEmpty()
  service_id: string;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  suggestion_text: string;
}