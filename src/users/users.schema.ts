import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    emailId: { type: String, unique: true, required: true, dropDups: true },
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
