// src/dtos/forgotPasswordDto.ts

import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class ForgotPasswordDto {
  @IsEmail()
    email!: string;
}

export class ResetPasswordDto {
  @IsString()
    @IsNotEmpty()
    token!: string;

  @IsString()
    @IsNotEmpty()
    newPassword!: string;
}
