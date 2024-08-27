import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { CartasModule } from './cartas/cartas.module';
import { User } from './users/entities/user.entity';
import { Volunteer } from './volunteers/entities/volunteer.entity';
import { Carta } from './cartas/entities/carta.entity';
import { typeOrmConfig } from './database/database.module'; // Certifique-se de que o caminho está correto

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carrega variáveis de ambiente globalmente
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([User, Volunteer, Carta]), // Registra entidades para injeção de dependência
    AuthModule, // Inclui AuthModule que deve fornecer JwtAuthGuard
    UsersModule,
    VolunteersModule,
    CartasModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
