import { IsString, IsOptional } from 'class-validator';

export class UpdateSuggestionDto {
  @IsOptional()
  @IsString()
  service_id?: string;

  @IsOptional()
  @IsString()
  user_id?: string;

  @IsOptional()
  @IsString()
  suggestion_text?: string;
}