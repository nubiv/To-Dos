import { Router } from 'express';
import tasksRouter from './tasks.routes';
import adminsRouter from './admins.routes';
import usagesRouter from './usages.routes';

const router = Router();

router.use('/', tasksRouter);
router.use('/', adminsRouter);
router.use('/', usagesRouter);

export default router;
