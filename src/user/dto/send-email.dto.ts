import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailDto {
  @IsEmail()
  @ApiProperty({ example: 'khh5345@naver.com' })
  email: string;
}