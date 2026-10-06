import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Workout {
  @PrimaryGeneratedColumn() 
  id: number;

  @Column()
  date: string;

  @Column() 
  routineName: string;

  @Column() 
  exerciseName: string;

  @Column('int') 
  weight: number;

  @Column('int')
  reps: number;

  @Column('int')
  sets: number;
}