import { RequestHandler } from 'express';
import { Task } from '../models/task.model';

export const createTask: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;
  // validate request
  if (!req.body.content) {
    res.status(400).send({
      message: 'Content can not be empty.'
    });
    return;
  }
  if (!req.body.status) {
    res.status(400).send({
      message: 'Status can not be empty.'
    });
    return;
  }

  // create a task
  const task = {
    content: req.body.content,
    status: req.body.status,
    userId: userId
  };

  // save task in the database
  Task.create(task)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the task.'
      });
    });
};

export const getAllTasks: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;

  Task.findAll({ where: { userId: userId } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tasks'
      });
    });
};

export const editTask: RequestHandler = async (req, res, next) => {
  const taskId = parseInt(req.params.taskId);
  const { content, status } = req.body;
  const task = await Task.findOne({ where: { id: taskId } });

  if (!task) {
    res.json({ message: 'Task not existed.' });
    return;
  }
  Task.update({ content: content, status: status }, { where: { id: taskId } })
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message: err.message || 'Some error occcurred while updating the task.'
      })
    );
};

export const deleteTask: RequestHandler = async (req, res, next) => {
  const taskId = parseInt(req.params.taskId);
  const task = await Task.findOne({ where: { id: taskId } });

  if (!task) {
    res.json({ message: 'Task not existed.' });
    return;
  }
  Task.destroy({ where: { id: taskId } })
    .then(() => res.json({ message: 'Task deleted.' }))
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while deleting the task.'
      });
    });
};
