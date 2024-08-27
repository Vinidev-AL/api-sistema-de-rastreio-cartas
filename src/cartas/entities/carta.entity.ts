import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Volunteer } from '../../volunteers/entities/volunteer.entity';
@Entity()
export class Carta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  nameOfKid: string;

  @Column({ type: 'varchar', length: 255 })
  nameOfPersonResponsible: string;

  @Column({ type: 'varchar', length: 20 })
  telefone: string;

  @Column({ type: 'varchar', length: 11 })
  cpfOfKid: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @Column({ type: 'varchar', length: 8 })
  cep: string;

  @Column({ type: 'int' })
  codStatus: number;

  @Column({ type: 'boolean' })
  isOccupied: boolean;

  @ManyToOne(() => Volunteer, (volunteer) => volunteer.cartas)
  volunteer: Volunteer[];

  @Column()
  pictureOne: string;

  @Column()
  pictureTwo: string;
  
  @Column()
  pictureThree: string;

  @Column()
  pictureFour: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}