import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkoutDto {
  @ApiProperty({ example: '2026-10-07', description: '운동 진행 날짜' })
  date: string;

  @ApiProperty({ 
    example: '수요일 등 루틴', 
    description: '루틴 구분 (화요일: 가슴, 수요일: 등, 토요일: 하체, 금요일: 어깨 팔)' 
  })
  routineName: string;

  @ApiProperty({ example: '랫 풀 다운', description: '운동 종목 명' })
  exerciseName: string;

  @ApiProperty({ example: 60, description: '세팅한 중량 (kg)' })
  weight: number;

  @ApiProperty({ example: 12, description: '반복 횟수 (회)' })
  reps: number;

  @ApiProperty({ example: 4, description: '수행한 세트 수' })
  sets: number;
}   