import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
import { UnauthorizedException } from '@nestjs/common';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({ cpfField: 'cpf' });
  }

  async validate(cpf: string, password: string): Promise<any> {
    const user = await this.usersService.validateUser(cpf, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}