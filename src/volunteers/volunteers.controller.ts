import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { CreateVolunteerDto } from './dtos/create-volunteer.dto';
import { UpdateVolunteerDto } from './dtos/update-volunteer.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../users/roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../users/roles/roles.enum';

@Controller('carteiros')
@UseGuards(JwtAuthGuard, RolesGuard)
export class VolunteersController {
  constructor(private readonly volunteersService: VolunteersService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createVolunteerDto: CreateVolunteerDto) {
    return this.volunteersService.create(createVolunteerDto);
  }

  @Get()
  @Roles(Role.Admin)
  findAll() {
    return this.volunteersService.findAll();
  }

  @Get(':cpf')
  @Roles(Role.Admin)
  findOne(@Param('cpf') cpf: string) {
    return this.volunteersService.findOne(cpf);
  }

  @Patch(':cpf')
  @Roles(Role.Admin)
  update(@Param('cpf') cpf: string, @Body() updateVolunteerDto: UpdateVolunteerDto) {
    return this.volunteersService.update(cpf, updateVolunteerDto);
  }

  @Delete(':cpf')
  @Roles(Role.Admin)
  remove(@Param('cpf') cpf: string) {
    return this.volunteersService.remove(cpf);
  }
}