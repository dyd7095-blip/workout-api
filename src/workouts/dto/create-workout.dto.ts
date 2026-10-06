import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateWorkoutDto {
  @ApiProperty({ example: '2026-10-07', description: '운동 진행 날짜' })
  @IsString()
  @IsNotEmpty({ message: '날짜는 비워둘 수 없습니다.' })
  date: string;

  @ApiProperty({ 
    example: '수요일 어깨 루틴', 
    description: '루틴 구분 (예: 수요일 어깨, 금요일 가슴/삼두 등)' 
  })
  @IsString()
  @IsNotEmpty({ message: '루틴 이름은 비워둘 수 없습니다.' })
  routineName: string;

  @ApiProperty({ example: '플레이트 로드 숄더 프레스', description: '운동 종목명' })
  @IsString()
  @IsNotEmpty({ message: '운동 종목명은 비워둘 수 없습니다.' })
  exerciseName: string;

  @ApiProperty({ example: 40, description: '세팅한 중량 (kg)' })
  @IsNumber({}, { message: '중량은 숫자여야 합니다.' })
  @Min(0, { message: '중량은 0 이상이어야 합니다.' })
  weight: number;

  @ApiProperty({ example: 12, description: '반복 횟수 (회)' })
  @IsNumber({}, { message: '반복 횟수는 숫자여야 합니다.' })
  @Min(1, { message: '반복 횟수는 최소 1회 이상이어야 합니다.' })
  reps: number;

  @ApiProperty({ example: 4, description: '수행한 세트 수' })
  @IsNumber({}, { message: '세트 수는 숫자여야 합니다.' })
  @Min(1, { message: '세트 수는 최소 1세트 이상이어야 합니다.' })
  sets: number;
}