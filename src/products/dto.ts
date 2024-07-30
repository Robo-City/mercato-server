import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateProductsDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
    quantity: any;
    price: any;
    available: any;
    category: any;

    constructor(d: CreatingProductsDto) {
        this.name = d.name;
        this.description = d.description;
        this.quantity = d.quantity;
        this.price = d.price;
        this.available = d.available;
        this.category = d.category;
    }

}

export class CreatingProductsDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;
    quantity: any;
    price: any;
    available: any;
    category: any;

    constructor(d: UpdateProductsDto) {
        this.name = d.name;
        this.description = d.description;
        this.quantity = d.quantity;
        this.price = d.price;
        this.available = d.available;
        this.category = d.category;
    }

}