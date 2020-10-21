import * as mongoose from 'mongoose';
import { CourseSchema } from 'src/courses/courses.schema';

export const UserSchema = new mongoose.Schema(
  {
    emailId: { type: String, unique: true, required: true, dropDups: true },
    password: String,
    course: [CourseSchema],
    name: String,
    company_name: String,
    highest_education: String,
    about_you: String,
    job_role: String,
    skills: String
  },
  { versionKey: false },
);
