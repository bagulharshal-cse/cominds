import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    emailId: String,
    password: String,
    name: String,
    company_name: String,
    highest_education: String,
    about_you: String,
    job_role: String,
    skills: String
  },
  { versionKey: false },
);
