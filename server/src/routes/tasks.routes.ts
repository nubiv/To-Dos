import { Router } from 'express';
import {
  createTask,
  deleteTask,
  editTask,
  getAllTasks
} from '../controllers/task.controller';
import { checkIfAuthenticated } from '../middlewares';

const tasksRouter = Router();
tasksRouter.get('/api/:userId/tasks', getAllTasks);

tasksRouter.post('/api/:userId/tasks', createTask);

tasksRouter.patch('/api/:userId/tasks/:taskId', editTask);

tasksRouter.delete('/api/:userId/tasks/:taskId', deleteTask);

export default tasksRouter;
