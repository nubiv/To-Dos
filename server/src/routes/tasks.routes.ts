import { Router } from 'express';
import { createTask, getAllTasks } from '../controllers/task.controller';
import { checkIfAuthenticated } from '../middlewares';

const tasksRouter = Router();
tasksRouter.get('/api/tasks', checkIfAuthenticated, getAllTasks);

tasksRouter.post('/api/tasks', checkIfAuthenticated, createTask);

export default tasksRouter;
