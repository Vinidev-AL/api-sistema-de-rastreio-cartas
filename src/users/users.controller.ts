import { Controller, Post, Body, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from './roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from './roles/roles.enum';

@Controller('users')
@UseGuards(JwtAuthGuard, RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Roles(Role.Admin)
  @Get(':cpf')  // Alterado para CPF
  findOne(@Param('cpf') cpf: string) {  // Alterado para CPF
    return this.usersService.findOne(cpf);  // Alterado para CPF
  }
  @Roles(Role.Admin)
  @Patch(':cpf')  // Alterado para CPF
  update(@Param('cpf') cpf: string, @Body() updateUserDto: UpdateUserDto) {  // Alterado para CPF
    return this.usersService.update(cpf, updateUserDto);  // Alterado para CPF
  }
}