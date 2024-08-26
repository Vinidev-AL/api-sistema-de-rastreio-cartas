import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../users/roles/roles.enum'; // Certifique-se de que o caminho está correto

@Injectable()
export class UsersService {
  private readonly saltRounds = 10;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verifica se o role é válido
    if (!Object.values(Role).includes(createUserDto.role)) {
      throw new BadRequestException('Invalid role');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, this.saltRounds);
    const user = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
    return this.userRepository.save(user);
  }

  async findOne(cpf: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ cpf });
    if (!user) {
      throw new NotFoundException(`User with cpf ${cpf} not found`);
    }
    return user;
  }

  async update(cpf: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ cpf });
    if (!user) {
      throw new NotFoundException(`User with cpf ${cpf} not found`);
    }

    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, this.saltRounds);
    }

    if (updateUserDto.role && !Object.values(Role).includes(updateUserDto.role)) {
      throw new BadRequestException('Invalid role');
    }

    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async validateUser(cpf: string, password: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { cpf } });
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return undefined;
  }
}