"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const tasksRouter = (0, express_1.Router)();
tasksRouter.get('/api/tasks', task_controller_1.getAllTasks);
tasksRouter.post('/api/tasks', task_controller_1.createTask);
exports.default = tasksRouter;
