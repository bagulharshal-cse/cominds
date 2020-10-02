import { Controller, Res, Body, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUser, User } from './users.dto';
import { Request, Response } from 'express';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  async registerUser(@Res() response: Response, @Body() user: User) {
    try {
      const mesg = await this.userService.registerUser(user);
      response.status(201).json(mesg);
    } catch (error) {
      response.status(500).json({
        statuscode: 500,
        mesg: 'Intenal Server Error',
      });
    }
  }

  @Post('/signin')
  async signInUser(@Res() response: Response, @Body() user: User) {
    try {
      const mesg = await this.userService.signInUser(user);
      response.status(200).json(mesg);
    } catch (error) {
      response.status(500).json({
        statuscode: 500,
        mesg: 'Intenal Server Error',
      });
    }
  }

  @Put('/')
  async updateUser(@Res() response: Response, @Body() user: UpdateUser){
    try {
      const mesg = await this.userService.updateUser(user);
      response.status(200).json(mesg);
    } catch (error) {
      response.status(500).json({
        statuscode: 500,
        mesg: 'Intenal Server Error',
      });
    }
  }
}
