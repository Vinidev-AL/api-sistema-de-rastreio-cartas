import { Injectable } from '@nestjs/common';
import { CreateCartaDto } from './dtos/create-carta.dto';
import { UpdateCartaDto } from './dtos/update-carta.dto';
import { Carta } from './entities/carta.entity';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CartasService {
  constructor(
    @InjectRepository(Carta)
    private readonly cartasRepository: Repository<Carta>,
  ) {}

  create(createServiceDto: CreateCartaDto): Promise<Carta> {
    const carta = this.cartasRepository.create(createServiceDto); // Renomeado para 'carta'
    return this.cartasRepository.save(carta);
  }

  findAll(): Promise<Carta[]> {
    return this.cartasRepository.find();
  }

  findOne(id: string): Promise<Carta> {
    return this.cartasRepository.findOneBy({ id });
  }

  async searchByDescription(description: string): Promise<Carta[]> { // Renomeado para 'searchByDescription'
    if (!description) {
      return []; // Retorna uma lista vazia se o parâmetro de busca for vazio
    }
    return this.cartasRepository.find({
      where: { description: Like(`%${description}%`) },
    });
  }

  update(id: string, updateCartaDto: UpdateCartaDto): Promise<Carta> {
    return this.cartasRepository.save({ ...updateCartaDto, id });
  }

  async remove(id: string): Promise<void> { // Adicionada a palavra-chave 'async'
    await this.cartasRepository.delete(id); // Usar await para garantir que a operação seja concluída
  }
}