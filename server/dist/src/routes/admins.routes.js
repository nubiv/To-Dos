"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("../controllers/admin.controller");
const middlewares_1 = require("../middlewares");
const adminsRouter = (0, express_1.Router)();
adminsRouter.get('/admin/users', middlewares_1.checkIfAdmin, admin_controller_1.fetchAllUsers);
exports.default = adminsRouter;
