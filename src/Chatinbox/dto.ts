import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreatingChatinboxDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNumber()
    userId: number; 

    constructor(d: CreatingChatinboxDto) {
        this.name = d.name;
        this.description = d.description;
        this.userId = d.userId
       
    }
}

export class UpdateChatinboxDto {
    @IsString()
    name?: string;

    @IsString()
    description?: string;

   @IsNumber()
   userId: number; 

    @IsString()
    category?: string;
    constructor(d: UpdateChatinboxDto) {
        this.name = d.name;
        this.description = d.description;
        this.userId = d.userId
    }
}

