import { Router } from 'express';
import {
  createTask,
  deleteTask,
  editTask,
  getAllTasks
} from '../controllers/task.controller';
import { checkIfAuthenticated } from '../middlewares';

const tasksRouter = Router();
tasksRouter.get('/api/:userId/tasks', checkIfAuthenticated, getAllTasks);

tasksRouter.post('/api/:userId/tasks', checkIfAuthenticated, createTask);

tasksRouter.patch('/api/:userId/tasks/:taskId', checkIfAuthenticated, editTask);

tasksRouter.delete(
  '/api/:userId/tasks/:taskId',
  checkIfAuthenticated,
  deleteTask
);

export default tasksRouter;
