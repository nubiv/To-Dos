// module.exports = (app) => {
//   const tasks = require('../controllers/task.controller');

//   const router = require('express').Router();

//   router.get('/', tasks.findAll);

//   router.post('/', tasks.create);

//   app.use('/api/tasks', router);
// };
import { Router } from 'express';
import { checkIfAdmin, checkIfAuthenticated } from '../middlewares/index.js';
// import tasks from '../controllers/task.controller.js';
import { fetchAllUsers } from '../controllers/user.controller.js';

const router = Router();

router.get('/api/tasks', checkIfAuthenticated);

router.post('/api/tasks', checkIfAuthenticated);

router.get('/admin/users', checkIfAdmin, fetchAllUsers);

export default router;
