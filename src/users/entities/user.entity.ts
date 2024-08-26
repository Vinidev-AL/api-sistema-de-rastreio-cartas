import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Role } from '../../users/roles/roles.enum';

@Entity()
@Unique(['cpf'])  // Garante que o CPF seja único
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  cpf: string;

  @Column()
  username: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Voluntario,
  })
  role: Role;
}
