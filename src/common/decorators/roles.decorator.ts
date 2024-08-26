// src/auth/roles.decorator.ts
// src/auth/roles.decorator.ts
import { SetMetadata } from '@nestjs/common';
import { Role } from '../../users/roles/roles.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

