import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // Importa UsersModule com forwardRef

@Module({
  imports: [
    JwtModule.register({
      secret: 'your-secret-key', // Substitua pelo seu segredo real
      signOptions: { expiresIn: '60m' },
    }),
    forwardRef(() => UsersModule), // Usa forwardRef para evitar dependência circular
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
