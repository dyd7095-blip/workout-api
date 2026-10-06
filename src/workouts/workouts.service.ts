import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto.js';
import { UpdateWorkoutDto } from './dto/update-workout.dto.js';

@Injectable()
export class WorkoutsService {
 
  private workouts: any[] = [];

  create(createWorkoutDto: CreateWorkoutDto) {
    const newWorkout = {
      id: Date.now(), 
      ...createWorkoutDto,
    };
    this.workouts.push(newWorkout);
    return {
      message: '운동 기록이 저장되었습니다.',
      data: newWorkout,
    };
  }

  findAll() {
    return {
      totalCount: this.workouts.length,
      items: this.workouts,
    };
  }

  findOne(id: number) {
    return this.workouts.find((item) => item.id === id);
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `ID가 ${id}인 운동 기록을 수정합니다.`;
  }

  remove(id: number) {
    return `ID가 ${id}인 운동 기록을 삭제합니다.`;
  }
}