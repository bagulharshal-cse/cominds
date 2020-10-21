import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;
export const CourseSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    status: String,
    userId: { type: Schema.Types.ObjectId, required: true },
  },
  { versionKey: false },
);
