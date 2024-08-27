import { PartialType } from '@nestjs/mapped-types';
import { CreateCartaDto } from './create-carta.dto';

export class UpdateCartaDto extends PartialType(CreateCartaDto) {}
