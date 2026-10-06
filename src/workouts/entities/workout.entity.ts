import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // 이 클래스가 데이터베이스의 'workout' 테이블이 됩니다.
export class Workout {
  @PrimaryGeneratedColumn() // 1, 2, 3... 순서대로 자동 부여되는 고유 ID
  id: number;

  @Column()
  date: string;

  @Column() // 루틴 이름 (예: 수요일 어깨)
  routineName: string;

  @Column() // 운동 종목명 (예: 플레이트 로드 숄더 프레스)
  exerciseName: string;

  @Column('int') // 정수형 데이터
  weight: number;

  @Column('int')
  reps: number;

  @Column('int')
  sets: number;
}