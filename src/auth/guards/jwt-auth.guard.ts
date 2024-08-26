import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    // Verifica se o cabeçalho de autorização está presente e começa com "Bearer "
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid authentication scheme');
    }

    const token = authHeader.split(' ')[1];

    // Se não houver token, lança uma exceção
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    try {
      // Verifica o token e anexa o usuário ao objeto de requisição
      const user = this.jwtService.verify(token);
      request.user = user; // Anexa o usuário ao objeto de requisição
      return true; // Permite o acesso à rota
    } catch (error) {
      // Tratamento de exceções detalhado
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Token expired');
      } else if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Malformed token');
      } else {
        throw new UnauthorizedException('Invalid token');
      }
    }
  }
}
