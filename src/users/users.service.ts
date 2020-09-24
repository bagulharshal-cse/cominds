import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './users.interface';
import { Model } from 'mongoose';
import { User } from './users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly userModel: Model<IUser>) {}

  async registerUser(user: User) {
    const userExist = await this.userModel.findOne({ emailId: user.emailId });
    if (userExist) {
      return { statusCode: '201', mesg: 'User already Registered' };
    } else {
      await this.userModel(user).save();
      return { statusCode: '201', mesg: 'User Registered' };
    }
  }

  async signInUser(user: User) {
    const userExist = await this.userModel.findOne({
      emailId: user.emailId,
      password: user.password,
    });
    if (userExist) {
      const userResponse = {
        statusCode: '200',
        mesg: 'User Successfully Logged In',
        emailId: userExist.emailId,
        token: '',
        courses: [
          {
            courseId: 'WF2341243141',
            courseCode: 'NODEjs',
            courseName: 'NODEjs',
            testResults: [
              {
                testName: 'Angular',
                testcode: 'NG',
                testScore: '90',
                submissionId: '789',
              },
            ],
          },
        ],
      };
      return userResponse;
    } else {
      return { statusCode: '201', mesg: 'User Not found' };
    }
  }
}
