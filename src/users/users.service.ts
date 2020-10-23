import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './users.interface';
import { Model } from 'mongoose';
import { UpdateUser, User } from './users.dto';
import { CoursesService } from '../courses/courses.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<IUser>,
    private courseService: CoursesService,
  ) {}

  async registerUser(user: User) {
    const userExist = await this.userModel.findOne({ emailId: user.emailId });
    if (userExist) {
      return { statusCode: '201', mesg: 'User already Registered' };
    } else {
      const newUser = await this.userModel(user).save();
      if (user.course) {
        this.courseService.addCourses(user.course, newUser._id);
      }
      return { statusCode: '201', mesg: 'User Registered' };
    }
  }

  async signInUser(user: User) {
    const userExist = await this.userModel.aggregate([
      {
        $match: {
          emailId: user.emailId,
          password: user.password,
        },
      },
      {
        $lookup: {
          from: 'courses',
          localField: '_id',
          foreignField: 'userId',
          as: 'courses',
        },
      },
    ]);
    // {
    //   emailId: user.emailId,
    //   password: user.password,
    // });
    if (userExist.length > 0) {
      const userResponse = {
        statusCode: '200',
        mesg: 'User Successfully Logged In',
        emailId: userExist[0].emailId,
        token: '',
        courses: userExist[0].courses,
      };
      return userResponse;
    } else {
      return { statusCode: '201', mesg: 'User Not found' };
    }
  }

  async updateUser(user: UpdateUser) {
    let userExist = await this.userModel.findOne({ emailId: user.emailId });
    if (userExist) {
      userExist = Object.assign(userExist, user);
      await userExist.save();
      return { statusCode: '201', mesg: 'User details updated' };
    } else {
      await this.userModel(user).save();
      return { statusCode: '201', mesg: 'Invalid Details' };
    }
  }
}
