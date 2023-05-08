import { Module } from '@nestjs/common';
import { CoursesControler } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
  controllers: [CoursesControler],
  providers: [CoursesService],
})
export class CoursesModule {}
