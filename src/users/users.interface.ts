import { ICourse } from "src/courses/courses.interface";

export interface IUser {
  emailId: string;
  password: string;
  courses: ICourse[];
  name: string;
  company_name: string;
  highest_education: string;
  about_you: string;
  job_role: string;
  skills: string;
}
