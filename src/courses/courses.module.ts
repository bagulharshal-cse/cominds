import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CourseSchema } from './courses.schema';
import { CoursesService } from './courses.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Courses', schema: CourseSchema }])],
  controllers: [CoursesController],
  providers: [CoursesService]
})
export class CoursesModule {}
