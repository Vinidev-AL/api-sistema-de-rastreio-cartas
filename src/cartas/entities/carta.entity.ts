import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Carta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nameOfKid: string;

  @Column()
  nameOfPersonResponsible: string;

  @Column()
  telefone: string;

  @Column()
  cpfOfKid: string;

  @Column('date')
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  cep: string;

  @Column()
  codStatus: number

  @Column()
  isOccupied: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}