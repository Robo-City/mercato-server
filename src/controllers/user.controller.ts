import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { UpdateUserDto } from '../dtos/update-user.dto';

const prisma = new PrismaClient();

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email }: UpdateUserDto = req.body;

  try {
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: 'User not found or other error' });
  }
};
