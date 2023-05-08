import { Module } from '@nestjs/common';
import { CoursesControler } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CoursesControler],
  providers: [CoursesService],
})
export class CoursesModule {}
