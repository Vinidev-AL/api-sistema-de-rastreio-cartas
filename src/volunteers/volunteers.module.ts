import { Module, forwardRef } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { VolunteersController } from './volunteers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volunteer } from './entities/volunteer.entity';
import { AuthModule } from '../auth/auth.module'; // Importa AuthModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Volunteer]),
    forwardRef(() => AuthModule), // Usa forwardRef para evitar dependência circular
  ],
  providers: [VolunteersService],
  controllers: [VolunteersController],
  exports: [VolunteersService], // Exporte o serviço se necessário em outros módulos
})
export class VolunteersModule {}
