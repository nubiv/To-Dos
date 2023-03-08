import { Router } from 'express';
import {
  deleteUser,
  fetchAllUsers,
  updateUserAuthorization
} from '../controllers/admin.controller';
import { checkIfAdmin } from '../middlewares';

const adminsRouter = Router();

adminsRouter.get('/api/admin/users', checkIfAdmin, fetchAllUsers);

adminsRouter.patch(
  '/api/admin/users/:userId',
  checkIfAdmin,
  updateUserAuthorization
);

adminsRouter.delete('/api/admin/users/:userId', checkIfAdmin, deleteUser);

export default adminsRouter;
