"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = exports.createTask = void 0;
const task_model_1 = require("../models/task.model");
const createTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // validate request
    if (!req.body.content) {
        res.status(400).send({
            message: 'Content can not be empty.'
        });
        return;
    }
    if (!req.body.content) {
        res.status(400).send({
            message: 'Status can not be empty.'
        });
        return;
    }
    // create a task
    const task = {
        content: req.body.content,
        status: req.body.status
    };
    // save task in the database
    task_model_1.Task.create(task)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the task.'
        });
    });
});
exports.createTask = createTask;
const getAllTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    task_model_1.Task.findAll()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving tasks'
        });
    });
});
exports.getAllTasks = getAllTasks;
