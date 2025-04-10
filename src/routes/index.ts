import { Router } from 'express';
import userRoutes from '../api/controllers/UserController';

const router = Router();
router.use('/users', userRoutes);
export default router;