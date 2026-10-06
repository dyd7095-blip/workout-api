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

  findAll(routineName?: string) {
    let results = this.workouts;

    if (routineName) {
      results = this.workouts.filter((item) => item.routineName.includes(routineName));
    }

    return {
      totalCount: results.length,
      items: results,
    };
  }

  findOne(id: number) {
    return this.workouts.find((item) => item.id === id);
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    const index = this.workouts.findIndex((item) => item.id === id);
    if (index === -1) {
      return { message: `ID가 ${id}인 운동 기록을 찾을 수 없습니다.` };
    }

    this.workouts[index] = {
      ...this.workouts[index],
      ...updateWorkoutDto,
    };

    return {
      message: `ID가 ${id}인 운동 기록이 성공적으로 수정되었습니다!`,
      data: this.workouts[index],
    };
  }

  remove(id: number) {
    const index = this.workouts.findIndex((item) => item.id === id);
    if (index === -1) {
      return { message: `ID가 ${id}인 운동 기록을 찾을 수 없습니다.` };
    }

    // 배열에서 해당 아이템 제거
    const deletedItem = this.workouts.splice(index, 1);

    return {
      message: `ID가 ${id}인 운동 기록이 삭제되었습니다.`,
      data: deletedItem[0],
    };
  }
}