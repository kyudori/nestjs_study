import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyEmailDto {
  @IsEmail()
  @ApiProperty({ example: 'khh5345@naver.com' })
  email: string;
  
  @ApiProperty({ example: '000000' })
  code: string;
}