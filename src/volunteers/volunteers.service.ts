import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVolunteerDto } from './dtos/create-volunteer.dto';
import { UpdateVolunteerDto } from './dtos/update-volunteer.dto';
import { Volunteer } from './entities/volunteer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VolunteersService {
  constructor(
    @InjectRepository(Volunteer)
    private readonly volunteerRepository: Repository<Volunteer>,
  ) {}

  async create(createVolunteerDto: CreateVolunteerDto): Promise<Volunteer> {
    const volunteer = this.volunteerRepository.create(createVolunteerDto);
    return this.volunteerRepository.save(volunteer);
  }

  async findAll(): Promise<Volunteer[]> {
    return this.volunteerRepository.find();
  }

  async findOne(id: string): Promise<Volunteer> {
    const volunteer = await this.volunteerRepository.findOneBy({ id });
    if (!volunteer) {
      throw new NotFoundException(`Volunteer with ID ${id} not found`);
    }
    return volunteer;
  }

  async update(id: string, updateVolunteerDto: UpdateVolunteerDto): Promise<Volunteer> {
    const volunteer = await this.volunteerRepository.findOneBy({ id });
    if (!volunteer) {
      throw new NotFoundException(`Volunteer with ID ${id} not found`);
    }
    Object.assign(volunteer, updateVolunteerDto);
    return this.volunteerRepository.save(volunteer);
  }

  async remove(id: string): Promise<void> {
    const result = await this.volunteerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Volunteer with ID ${id} not found`);
    }
  }
}
