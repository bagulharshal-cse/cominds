import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Course } from '../courses/courses.dto';

export class User {
  _id:string;
  @ApiProperty() emailId: string;
  @ApiProperty() password: string;
  @ApiProperty() course: Course;
}

export class UpdateUser extends PartialType(User){
  @ApiProperty() name: string;
  @ApiProperty() company_name: string;
  @ApiProperty() highest_education: string;
  @ApiProperty() about_you: string;
  @ApiProperty() job_role: string;
  @ApiProperty() skills: string;
}