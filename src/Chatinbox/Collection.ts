import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CreatingChatinboxDto, UpdateChatinboxDto } from "./dto";
import { validate } from "class-validator";
import { prisma } from "../config/prisma";

  // Adjust the path as needed

// Rename local variable to avoid conflict

// Renamed to avoid conflict


export class ChatinboxCollection {
    async Create(req: Request, res: Response) {
        try {
            const data = new CreatingChatinboxDto(req.body);
            const errors = await validate(data);

            if (errors.length > 0) {
                return res.status(StatusCodes.CONFLICT).json({
                    errors: errors.map((e) => e.constraints),
                });
            }

            const chatinbox = await prisma.chatInbox.create({
                data: {
                    name: data.name,
                    description: data.description,
                    userId: data.userId}
            });

            return res.status(StatusCodes.CREATED).json(chatinbox);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }

    async GetAll(_req: Request, res: Response) {
        try {
            const chatinbox = await prisma.chatInbox.findMany();

            if (chatinbox.length > 0) {
                return res.status(StatusCodes.OK).json(chatinbox);
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
            const chatinbox = await prisma.chatInbox.findUnique({
                where: { id: id },
            });

            if (!chatinbox) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "No product found by that id",
                });
            } else {
                return res.status(StatusCodes.OK).json(chatinbox);
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
            const data = new UpdateChatinboxDto(req.body);
            const errors = await validate(data);

            if (errors.length > 0) {
                return res.status(StatusCodes.CONFLICT).json({
                    errors: errors.map((e) => e.constraints),
                });
            }

            const chatinbox = await prisma.chatInbox.update({
                where: { id: id },
                data: {
                    name: data.name,
                    description: data.description,
                    userId: data.userId
                }
            });

            return res.status(StatusCodes.OK).json(chatinbox);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                error: error,
            });
        }
    }

    async Delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const chatinbox = await prisma.chatInbox.findUnique({
                where: { id: id },
            });

            if (!chatinbox) {
                return res.status(StatusCodes.NOT_FOUND).json({
                    message: "Product not found",
                });
            } else {
                await prisma.chatInbox.delete({
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
