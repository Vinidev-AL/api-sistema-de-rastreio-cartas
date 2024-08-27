import { Module } from '@nestjs/common';
import { CartasService } from './cartas.service'; 
import { CartasController } from './cartas.controller'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carta } from './entities/carta.entity'; 
import { JwtModule } from '@nestjs/jwt'; // Importe o JwtModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Carta]),
    JwtModule.register({ // Certifique-se de que a configuração está correta
      secret: 'YOUR_SECRET_KEY',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [CartasService],
  controllers: [CartasController],
})
export class CartasModule {}
