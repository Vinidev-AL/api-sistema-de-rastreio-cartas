import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Carta } from '../../cartas/entities/carta.entity';

@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  telefone: string; 

  @Column()
  ability: string;

  @Column()
  volunteerCourse: string;

  @Column()
  signedTheTerm: string;

  @Column('text')
  personalDescription: string;

  @Column()
  picture: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}