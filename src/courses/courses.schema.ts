import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema(
    {
        code: { type: String, unique: true, required: true, dropDups: true },
        status: String,
        userId: String
    },
    { versionKey: false },
);