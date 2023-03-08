import { Router } from 'express';
import {
  getTotalCount,
  increaseAddTaskTotalCount,
  increaseTranslateTotalCount
} from '../controllers/usage.controller';
import { checkIfAdmin, checkIfAuthenticated } from '../middlewares';

const usagesRouter = Router();

usagesRouter.get('/api/admin/usages/:userId', checkIfAdmin, getTotalCount);

usagesRouter.patch(
  '/api/admin/usages/:userId/translate',
  checkIfAuthenticated,
  increaseTranslateTotalCount
);

usagesRouter.patch(
  '/api/admin/usages/:userId/add-task',
  checkIfAuthenticated,
  increaseAddTaskTotalCount
);

export default usagesRouter;
