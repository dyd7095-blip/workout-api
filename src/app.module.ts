import { Module } from '@nestjs/common';
import { WorkoutsModule } from './workouts/workouts.module.js';

@Module({
  imports: [WorkoutsModule], // 이 부분이 핵심입니다!
  controllers: [],
  providers: [],
})
export class AppModule {}