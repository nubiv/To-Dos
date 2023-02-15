import { Router } from 'express';
import tasksRouter from './tasks.routes'
import adminsRouter from './admins.routes';

const router = Router();

router.use('/', tasksRouter)
router.use('/', adminsRouter)

export default router;
