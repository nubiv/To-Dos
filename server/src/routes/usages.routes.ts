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
  '/api/usages/translate',
  checkIfAuthenticated,
  increaseTranslateTotalCount
);

usagesRouter.patch(
  '/api/usages/add-task',
  checkIfAuthenticated,
  increaseAddTaskTotalCount
);

export default usagesRouter;
