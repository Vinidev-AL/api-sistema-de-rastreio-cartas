import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login.dto';
import { RegisterDto } from './dtos/register.dto';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto): Promise<User> {
    return this.usersService.create(registerDto);
  }

  async login(loginDto: LoginDto): Promise<{ access_token: string }> {
    if (!loginDto || !loginDto.cpf || !loginDto.password) {
      throw new Error('CPF and password are required');
    }
  
    const user = await this.usersService.validateUser(loginDto.cpf, loginDto.password);
  
    if (!user) {
      throw new Error('Invalid credentials');
    }
  
    // Incluindo o role no payload do token
    const payload = { cpf: user.cpf, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
