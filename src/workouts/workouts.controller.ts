import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { WorkoutsService } from './workouts.service.js';
import { CreateWorkoutDto } from './dto/create-workout.dto.js';
import { UpdateWorkoutDto } from './dto/update-workout.dto.js';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('workouts')
@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  @ApiOperation({ summary: '운동 기록 생성' })
  create(@Body() createWorkoutDto: CreateWorkoutDto) {
    return this.workoutsService.create(createWorkoutDto);
  }

  @Get()
  @ApiOperation({ summary: '운동 기록 전체 조회 ' })
  findAll(@Query('routineName') routineName?: string) {
    return this.workoutsService.findAll(routineName);
  }

  @Get(':id')
  @ApiOperation({ summary: '특정 운동 기록 조회' })
  findOne(@Param('id') id: string) {
    return this.workoutsService.findOne(+id);
  }

 
  @Patch(':id')
  @ApiOperation({ summary: '운동 기록 수정' })
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.workoutsService.update(+id, updateWorkoutDto);
  }


  @Delete(':id')
  @ApiOperation({ summary: '운동 기록 삭제' })
  remove(@Param('id') id: string) {
    return this.workoutsService.remove(+id);
  }
}