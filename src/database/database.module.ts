import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Volunteer } from '../volunteers/entities/volunteer.entity';
import { Carta } from '../cartas/entities/carta.entity';
import { Suggestion } from '../photos/entities/suggestion.entity';
import * as dotenv from 'dotenv';

dotenv.config()

export const typeOrmConfig = {
  type: 'postgres' as const,
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT, // Converte para número
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true, // Carrega automaticamente as entidades
  entities: [User, Volunteer, Carta, Suggestion], // Lista as entidades explicitamente
  synchronize: true, // Usar com cuidado, ideal para desenvolvimento
};

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class DatabaseModule {}
