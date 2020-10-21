import { ApiProperty, PartialType } from '@nestjs/swagger';

export class Course {
    @ApiProperty() code: string;
    @ApiProperty() status: string;
    @ApiProperty() userId: string;
}