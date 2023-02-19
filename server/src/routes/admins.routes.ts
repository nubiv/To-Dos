import { Router } from 'express';
import {
  deleteUser,
  fetchAllUsers,
  updateUserAuthorization
} from '../controllers/admin.controller';
import { checkIfAdmin } from '../middlewares';

const adminsRouter = Router();

adminsRouter.get('/api/admin/users', fetchAllUsers);

adminsRouter.patch('/api/admin/users/:userId', updateUserAuthorization);

adminsRouter.delete('/api/admin/users/:userId', deleteUser);

export default adminsRouter;
