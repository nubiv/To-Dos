import { Router } from "express";
import { createTask, getAllTasks } from "../controllers/task.controller";
import { checkIfAuthenticated } from "../middlewares";

const tasksRouter = Router();
tasksRouter.get('/api/tasks', getAllTasks);

tasksRouter.post('/api/tasks', createTask);

export default tasksRouter;