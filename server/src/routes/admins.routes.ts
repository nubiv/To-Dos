import { Router } from "express";
import { fetchAllUsers } from "../controllers/admin.controller";
import { checkIfAdmin } from "../middlewares";

const adminsRouter = Router();

adminsRouter.get('/admin/users', checkIfAdmin, fetchAllUsers);

export default adminsRouter;