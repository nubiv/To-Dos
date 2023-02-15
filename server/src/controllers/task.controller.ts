import { RequestHandler } from "express";
import { Task } from '../models/task.model'

export const createTask: RequestHandler = async (req, res, next) => {
  // validate request
  console.log(req.body.content)
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
  Task.create(task)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the task.'
      });
    });
}

export const getAllTasks: RequestHandler = async (req, res, next) => {
  Task.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tasks'
      });
    });
}