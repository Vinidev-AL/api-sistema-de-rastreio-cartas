import { Controller, Post, Body, Get, Param, Patch, Delete, Query, UseGuards } from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CreateCartaDto } from './dtos/create-carta.dto';
import { UpdateCartaDto } from './dtos/update-carta.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../users/roles/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../users/roles/roles.enum';

@Controller('cartas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CartasController {
  constructor(private readonly cartasService: CartasService) {} // Corrigido o nome da variável

  @Post()
  @Roles(Role.Admin, Role.Adotante, Role.Carteiro)
  create(@Body() createCartaDto: CreateCartaDto) {
    return this.cartasService.create(createCartaDto);
  }

  @Get()
  @Roles(Role.Admin, Role.Adotante, Role.Carteiro)
  findAll() {
    return this.cartasService.findAll();
  }

  @Get('search')
  @Roles(Role.Admin, Role.Adotante, Role.Carteiro)
  async searchByDescription(@Query('description') description: string) { 
    return this.cartasService.searchByDescription(description); 
  }

  @Get(':id')
  @Roles(Role.Admin, Role.Adotante, Role.Carteiro)
  findOne(@Param('id') cpf: string) {
    return this.cartasService.findOne(cpf);
  }

  @Patch(':id')
  @Roles(Role.Admin, Role.Carteiro)
  update(@Param('id') cpf: string, @Body() updateCartaDto: UpdateCartaDto) {
    return this.cartasService.update(cpf, updateCartaDto); 
  }

  @Delete(':id')
  @Roles(Role.Admin, Role.Carteiro)
  remove(@Param('id') cpf: string) {
    return this.cartasService.remove(cpf);
  }
}