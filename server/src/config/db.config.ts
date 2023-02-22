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
//   host: process.env.POSTGRES_HOST as string,
//   port: parseInt(process.env.POSTGRES_PORT!) as number,
//   username: process.env.POSTGRES_USER as string,
//   password: process.env.POSTGRES_PASSWORD as string,
//   database: process.env.POSTGRES_DATABASE as string,
//   dialect: 'postgres' as Dialect,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
