import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateVolunteerDto } from './dtos/create-volunteer.dto';
import { UpdateVolunteerDto } from './dtos/update-volunteer.dto';
import { Volunteer } from './entities/volunteer.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../users/roles/roles.enum';

@Injectable()
export class VolunteersService {
  private readonly saltRounds = 10;
  constructor(
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
  ) {}

  async create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    // Verifica se o role é válido, se o DTO tiver um campo 'role'
    if (createVolunteerDto.role && !Object.values(Role).includes(createVolunteerDto.role)) {
      throw new BadRequestException('Invalid role');
    }

    // Se o DTO tiver um campo 'password', faz o hash
    if (createVolunteerDto.password) {
      const hashedPassword = await bcrypt.hash(createVolunteerDto.password, this.saltRounds);
      createVolunteerDto.password = hashedPassword;
    }

    const volunteer = this.volunteerRepository.create(createVolunteerDto);
    return this.volunteerRepository.save(volunteer);
  }

  async findAll(): Promise<Volunteer[]> {
    return this.volunteerRepository.find();
  }

  async findOne(cpf: string): Promise<Volunteer> {
    const user = await this.volunteerRepository.findOne({ where: { cpf } });
    if (!user) {
      throw new NotFoundException(`User with cpf ${cpf} not found`);
    }
    return user;
  }

  async update(cpf: string, updateVolunteerDto: UpdateVolunteerDto): Promise<Volunteer> {
    const user = await this.findOne(cpf);

    if (updateVolunteerDto.password) {
      updateVolunteerDto.password = await bcrypt.hash(updateVolunteerDto.password, this.saltRounds);
    }

    if (updateVolunteerDto.role && !Object.values(Role).includes(updateVolunteerDto.role)) {
      throw new BadRequestException('Invalid role');
    }

    Object.assign(user, updateVolunteerDto);
    return this.volunteerRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    const result = await this.volunteerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Volunteer with ID ${id} not found`);
    }
  }
}
