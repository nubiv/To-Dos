import { RequestHandler } from 'express';
import { Usage } from '../models/usage.model';

export const getTotalCount: RequestHandler = async (req, res, next) => {
  const userId = req.params.userId;

  Usage.findOne({ where: { userId: userId } })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  Usage.findOrCreate({ where: { userId: userId } })
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retriving user usage.'
      });
    });
};

export const increaseTranslateTotalCount: RequestHandler = async (
  req,
  res,
  next
) => {
  const userId = req.params.userId;
  const usage = await Usage.findOne({ where: { userId: userId } });

  if (!usage) {
    const user = {
      userId: userId,
      translateTotalCount: 1
    };

    Usage.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating user usage.'
        });
      });
  } else {
    const updatedUsage = {
      ...usage,
      translateTotalCount: ++usage.translateTotalCount
    };

    Usage.update(updatedUsage, { where: { userId: userId } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while updating user usage.'
        });
      });
  }
};

export const increaseAddTaskTotalCount: RequestHandler = async (
  req,
  res,
  next
) => {
  const userId = req.params.userId;
  const usage = await Usage.findOne({ where: { userId: userId } });

  if (!usage) {
    const user = {
      userId: userId,
      addTaskTotalCount: 1
    };

    Usage.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating user usage.'
        });
      });
  } else {
    const updatedUsage = {
      ...usage,
      addTaskTotalCount: ++usage.addTaskTotalCount
    };

    Usage.update(updatedUsage, { where: { userId: userId } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while updating user usage.'
        });
      });
  }
};
