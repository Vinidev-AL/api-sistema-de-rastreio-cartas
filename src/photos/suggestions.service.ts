import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dtos/create-suggestion.dto';
import { Suggestion } from './entities/suggestion.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SuggestionsService {
  constructor(
    @InjectRepository(Suggestion)
    private readonly suggestionRepository: Repository<Suggestion>,
  ) {}

  create(createSuggestionDto: CreateSuggestionDto): Promise<Suggestion> {
    const suggestion = this.suggestionRepository.create(createSuggestionDto);
    return this.suggestionRepository.save(suggestion);
  }

  findAll(): Promise<Suggestion[]> {
    return this.suggestionRepository.find();
  }

  findOne(id: string): Promise<Suggestion> {
    return this.suggestionRepository.findOneBy({ id });
  }

  remove(id: string): Promise<void> {
    return this.suggestionRepository.delete(id).then(() => {});
  }
}