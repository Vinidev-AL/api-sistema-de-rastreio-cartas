import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Volunteer } from '../../volunteers/entities/volunteer.entity';
@Entity()
export class Carta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  picture: string;

  @Column('text')
  description: string;

  @ManyToOne(() => Volunteer, volunteer => volunteer.cartas)
  volunteer: Volunteer;  // Relaciona com o modelo Volunteer

  @Column()
  isOccupied: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}