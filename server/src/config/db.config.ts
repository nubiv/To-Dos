import { Dialect } from "sequelize";

export const dbConfig = {
  host: 'localhost',
  port: 5432,
  username: 'me',
  password: '123456',
  database: 'postgres',
  dialect: 'postgres' as Dialect,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
