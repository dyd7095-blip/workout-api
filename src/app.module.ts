import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutsModule } from './workouts/workouts.module.js';

@Module({
  imports: [
    // 👇 DB 연결 설정 추가
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'workout-data.sqlite', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    WorkoutsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}