import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Carta } from '../../cartas/entities/carta.entity';
import { Role } from '../../users/roles/roles.enum';

@Entity('volunteers')
export class Volunteer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({
    type: 'varchar',
    length: 11,
    unique: true, // Garante que o CPF seja único, se necessário
  })
  cpf: string;

  @Column({length: 32})
  password: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string; 

  @Column({ type: 'varchar', length: 255 })
  ability: string;

  @Column({ type: 'varchar', length: 255 })
  volunteerCourse: string;

  @Column({ type: 'varchar', length: 255 })
  signedTheTerm: string;

  @Column({ type: 'text' })
  personalDescription: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  picture: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => Carta, (carta) => carta.volunteer)
  cartas: Carta[];

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Adotante,
  })
  role: Role;
}
