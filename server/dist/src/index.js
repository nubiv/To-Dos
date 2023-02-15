"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const index_1 = require("./models/index");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const index_2 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// set up middlewares
// use body-parser to parse incoming request bodies (json, urlencoded), under req.body property
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({
    extended: true
}));
// enable CORS
const corsOptions = {
    origin: 'http://localhost:4200'
};
app.use((0, cors_1.default)(corsOptions));
// connect to postsql
// sync database, set force: ture to allow drop existing tables and re-sync database
index_1.sequelizeConnection
    .sync({ force: true })
    .then(() => {
    console.log('Synced db.');
})
    .catch((err) => {
    console.log(err.message);
});
// difine routes
app.use('/', index_2.default);
// Error handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at port: ${port}...`);
});
