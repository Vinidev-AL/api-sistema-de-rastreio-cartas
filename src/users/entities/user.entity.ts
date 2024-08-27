import { Entity, Column, PrimaryGeneratedColumn, Unique, PrimaryColumn } from 'typeorm';
import { Role } from '../../users/roles/roles.enum';

@Entity()
@Unique(['email']) // Garante que o email seja único
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 11,
    unique: true, // Garante que o CPF seja único, se necessário
  })
  cpf: string;

  @Column({
    type: 'varchar',
    length: 50, // Ajuste o comprimento conforme necessário
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 255, // Ajuste o comprimento conforme necessário
    nullable: true, // Permite que o endereço seja opcional
  })
  address: string;

  @Column({
    type: 'varchar',
    length: 255, // Ajuste o comprimento conforme necessário
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255, // Ajuste o comprimento conforme necessário
    unique: true, // Garante que o e-mail seja único
  })
  email: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Adotante,
  })
  role: Role;
}

