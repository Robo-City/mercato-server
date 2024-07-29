import { Router } from 'express';
import { updateUser } from '../controllers/user.controller';

const router = Router();

router.put('/update/:id', updateUser);

export default router;
