module.exports = (app) => {
  const tasks = require('../controllers/task.controller');

  const router = require('express').Router();

  router.get('/', tasks.findAll);

  router.post('/', tasks.create);

  app.use('/api/tasks', router);
};
