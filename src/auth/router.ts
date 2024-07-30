import { Router } from 'express';
import { forgotPassword } from './validation';

const router = Router();

router.post('/forgot-password', forgotPassword);

export default router;