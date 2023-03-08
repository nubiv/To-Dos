import { Dialect } from 'sequelize';

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

// export const dbConfig = {
//   host: process.env.INSTANCE_UNIX_SOCKET as string,
//   port: 5432,
//   username: process.env.DB_USER as string,
//   password: process.env.DB_PASS as string,
//   database: process.env.DB_NAME as string,
//   dialect: 'postgres' as Dialect,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
