import { Injectable } from '@nestjs/common';
import { CreateCartaDto } from './dtos/create-carta.dto';
import { UpdateCartaDto } from './dtos/update-carta.dto';
import { Carta } from './entities/carta.entity';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class CartasService {
  constructor(
    @InjectRepository(Carta)
    private readonly cartasRepository: Repository<Carta>,
  ) {}

  create(createCartaDto: CreateCartaDto): Promise<Carta> {
    const carta = plainToInstance(Carta, createCartaDto); // Converte o DTO para uma instância da entidade
    return this.cartasRepository.save(carta);
  }

  findAll(): Promise<Carta[]> {
    return this.cartasRepository.find();
  }

  findOne(id: string): Promise<Carta> {
    return this.cartasRepository.findOneBy({ id });
  }

  async searchByDescription(nameOfKid: string): Promise<Carta[]> { // Renomeado para 'searchByDescription'
    if (!nameOfKid) {
      return []; // Retorna uma lista vazia se o parâmetro de busca for vazio
    }
    return this.cartasRepository.find({
      where: { nameOfKid: Like(`%${nameOfKid}%`) },
    });
  }

  async update(id: string, updateCartaDto: UpdateCartaDto): Promise<Carta> {
    const carta = await this.cartasRepository.preload({
      id, 
      ...updateCartaDto,
      isOccupied: updateCartaDto.isOccupied === 'true', // Converte a string para booleano
    });
  
    if (!carta) {
      throw new NotFoundException(`Carta with ID ${id} not found`);
    }
  
    return this.cartasRepository.save(carta);
  }

  async remove(id: string): Promise<void> { // Adicionada a palavra-chave 'async'
    await this.cartasRepository.delete(id); // Usar await para garantir que a operação seja concluída
  }
}