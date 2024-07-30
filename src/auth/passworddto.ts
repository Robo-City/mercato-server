import { IsEmail, IsNotEmpty } from 'class-validator';

export class EmailDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;
    constructor(data:EmailDto){
        this.email=data.email
    }
}