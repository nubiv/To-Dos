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
exports.fetchAllUsers = exports.makeUserAdmin = void 0;
const firebase_config_1 = __importDefault(require("../config/firebase.config"));
const makeUserAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.body;
    yield firebase_config_1.default.auth().setCustomUserClaims(uid, { isAdmin: true });
    return res.send({ message: 'Successfully promoted.' });
});
exports.makeUserAdmin = makeUserAdmin;
const fetchAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.fetchAllUsers = fetchAllUsers;
