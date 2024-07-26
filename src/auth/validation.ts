import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import { PasswordDto } from './passworddto';

const prisma = new PrismaClient();

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const forgotPassword = async (req: Request, res: Response) => {
    const { email } = req.body;

    
    console.log(`Request body:`, req.body);
    console.log(`Searching for user with email: ${email}`); 

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

    await prisma.user.update({
        where: { id: user.id },
        data: { resetToken, resetTokenExpiry },
    });

    const resetLink = `http://yourapp.com/reset-password?token=${resetToken}`;
    await transporter.sendMail({
        to: email,
        subject: 'Password Reset',
        text: `You requested a password reset. Click the link to reset your password: ${resetLink}`,
    });

    res.json({ message: 'Password reset link sent to your email' });
};


export const resetPassword = async (req: Request, res: Response) => {
    const { token } = req.body as PasswordDto;

    const user = await prisma.user.findFirst({ where: { resetToken: token } });
    if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }
  
};
