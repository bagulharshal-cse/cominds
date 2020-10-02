import { ApiProperty, PartialType } from '@nestjs/swagger';

export class User {
  @ApiProperty() emailId: string;
  @ApiProperty() password: string;
}

export class UpdateUser extends PartialType(User){
  @ApiProperty() name: string;
  @ApiProperty() company_name: string;
  @ApiProperty() highest_education: string;
  @ApiProperty() about_you: string;
  @ApiProperty() job_role: string;
  @ApiProperty() skills: string;
}