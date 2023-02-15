"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelizeConnection = void 0;
const db_config_1 = require("../config/db.config");
const sequelize_1 = require("sequelize");
exports.sequelizeConnection = new sequelize_1.Sequelize(db_config_1.dbConfig.database, db_config_1.dbConfig.username, db_config_1.dbConfig.password, {
    host: db_config_1.dbConfig.host,
    dialect: db_config_1.dbConfig.dialect,
    pool: {
        max: db_config_1.dbConfig.pool.max,
        min: db_config_1.dbConfig.pool.min,
        acquire: db_config_1.dbConfig.pool.acquire,
        idle: db_config_1.dbConfig.pool.idle
    }
});
