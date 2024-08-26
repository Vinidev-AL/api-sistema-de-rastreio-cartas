import { Controller, Post, Body, Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { CartasService } from './cartas.service';
import { CreateCartaDto } from './dtos/create-carta.dto';
import { UpdateCartaDto } from './dtos/update-carta.dto';

@Controller('cartas')
export class CartasController {
  constructor(private readonly cartasService: CartasService) {} // Corrigido o nome da variável

  @Post()
  create(@Body() createCartaDto: CreateCartaDto) {
    return this.cartasService.create(createCartaDto);
  }

  @Get()
  findAll() {
    return this.cartasService.findAll();
  }

  @Get('search')
  async searchByDescription(@Query('nameOfKid') nameOfKid: string) { 
    return this.cartasService.searchByDescription(nameOfKid); 
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartaDto: UpdateCartaDto) {
    return this.cartasService.update(id, updateCartaDto); 
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartasService.remove(id);
  }
}