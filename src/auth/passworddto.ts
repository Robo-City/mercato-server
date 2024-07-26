import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class PasswordDto {
    @IsEmail()
  @IsNotEmpty()
  email!: string;

    @IsString()
    @IsNotEmpty()
    token?: string; // Optional for ForgotPasswordDto

    @IsString()
    @IsNotEmpty()
    newPassword?: string; // Optional for ResetPasswordDto
}