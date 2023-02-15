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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIfAdmin = exports.checkIfAuthenticated = void 0;
const firebase_config_js_1 = __importDefault(require("../config/firebase.config.js"));
const checkIfAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization.split(' ')[1];
    try {
        const userInfo = yield firebase_config_js_1.default.auth().verifyIdToken(token);
        if (userInfo) {
            console.log(userInfo);
            return next();
        }
        return res.json({ message: 'Unauthorized' });
    }
    catch (e) {
        return res.json({ message: 'Internal Error' });
    }
});
exports.checkIfAuthenticated = checkIfAuthenticated;
const checkIfAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers.authorization.split(' ')[1];
    try {
        const userInfo = yield firebase_config_js_1.default.auth().verifyIdToken(token);
        if (userInfo.isAdmin) {
            console.log(userInfo);
            return next();
        }
        return res.json({ message: 'Not an admin.' });
    }
    catch (e) {
        return res.json({ message: 'Internal Error' });
    }
});
exports.checkIfAdmin = checkIfAdmin;
