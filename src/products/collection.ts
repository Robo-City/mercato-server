import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreatingProductsDto, UpdateProductsDto } from "./dto";
import { validate } from "class-validator";
import { prisma } from "../config/prisma";

export class ProductsCollection {
    static Create: any;
    static Update(_arg0: string, _Update: any) {
        throw new Error("Method not implemented.");
    }
    async Create(req: Request, res: Response) {
        try {
            const data = new CreatingProductsDto(req.body);
            const errors = await validate(data);

            if (errors.length > 0) {
                return res.status(StatusCodes.CONFLICT).json({
                    errors: errors.map((e) => e.constraints),
                });
            }

            const product = await prisma.products.create({
                data: {
                    name: data.name,
                    description: data.description,
                    // Add other required fields as per your Prisma schema
                    quantity: data.quantity,
                    price: data.price,
                    available: data.available,
                    category: data.category,
                },
            });

            return res.status(StatusCodes.CREATED).json(product);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }

    async GetAll(_req: Request, res: Response) {
        try {
            const products = await prisma.products.findMany();

            if (products.length > 0) {
                return res.status(StatusCodes.OK).json(products);
            } else {
                return res.status(StatusCodes.OK).json({
                    message: "There are no products in the database",
                });
            }
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }

    async GetById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const product = await prisma.products.findUnique({
                where: { id: id },
            });

            if (!product) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "No product found by that id",
                });
            } else {
                return res.status(StatusCodes.OK).json(product);
            }
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }

    async Update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const data = new UpdateProductsDto(req.body);
            const errors = await validate(data);

            if (errors.length > 0) {
                return res.status(StatusCodes.CONFLICT).json({
                    errors: errors.map((e) => e.constraints),
                });
            }

            const product = await prisma.products.update({
                where: { id: id },
                data: {
                    name: data.name,
                    description: data.description,
                    // Add other required fields as per your Prisma schema
                    quantity: data.quantity,
                    price: data.price,
                    available: data.available,
                    category: data.category,
                },
            });

            return res.status(StatusCodes.OK).json(product);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }

    async Delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const product = await prisma.products.findUnique({
                where: { id: id },
            });

            if (!product) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "Product not found",
                });
            } else {
                await prisma.products.delete({
                    where: { id: id },
                });

                return res.status(StatusCodes.OK).json({
                    message: "Product deleted successfully",
                });
            }
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }
}