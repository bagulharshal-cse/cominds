import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { CoursesService } from 'src/courses/courses.service';
import { CoursesModule } from 'src/courses/courses.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),CoursesModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
