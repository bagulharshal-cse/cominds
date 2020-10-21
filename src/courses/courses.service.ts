import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICourse } from './courses.interface';
import { Model } from 'mongoose';
import { Course } from './courses.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel('Courses') private readonly courseModel: Model<ICourse>,
  ) {}

  async addCourses(course: Course, userId: string) {
    course.userId = userId;
    await this.courseModel(course).save();
    return { statusCode: '201', mesg: 'Course Added' };
  }
}
