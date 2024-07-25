import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';
import { PasswordDto } from './passworddto';
import { validateDto } from './validation';

const router = Router();
const prisma = new PrismaClient();

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Forgot Password Route
router.post('/forgot-password', validateDto(PasswordDto), async (req, res) => {
    const { email } = req.body;

    const user = await prisma.user.findFirst({ where: { email } });
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
});

// Reset Password Route
router.post('/reset-password', validateDto(PasswordDto), async (req, res) => {
    const { token, newPassword } = req.body;

    const user = await prisma.user.findFirst({ where: { resetToken: token } });
    if (!user || !user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
        return res.status(400).json({ message: 'Invalid or expired token' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: { id: user.id },
        data: {
            password: hashedPassword,
            resetToken: null,
            resetTokenExpiry: null,
        },
    });

    res.json({ message: 'Password has been reset successfully' });
});

export default router;
