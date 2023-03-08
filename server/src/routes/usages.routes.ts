import { Router } from 'express';
import {
  getTotalCount,
  increaseAddTaskTotalCount,
  increaseTranslateTotalCount
} from '../controllers/usage.controller';
import { checkIfAdmin } from '../middlewares';

const usagesRouter = Router();

usagesRouter.get('/api/admin/usages/:userId', getTotalCount);

usagesRouter.patch(
  '/api/admin/usages/:userId/translate',
  increaseTranslateTotalCount
);

usagesRouter.patch(
  '/api/admin/usages/:userId/add-task',
  increaseAddTaskTotalCount
);

export default usagesRouter;
