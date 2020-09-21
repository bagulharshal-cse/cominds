import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty() emailId: string;
  @ApiProperty() password: string;
}
