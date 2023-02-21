import express, { Request, Response, NextFunction } from 'express';
import { json, urlencoded } from 'body-parser';
import { sequelize } from './models/index';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index';

dotenv.config();

const app = express();
const port = process.env.PORT;

// set up middlewares
// use body-parser to parse incoming request bodies (json, urlencoded), under req.body property
app.use(json());
app.use(
  urlencoded({
    extended: true
  })
);
// enable CORS
const corsOptions = {
  origin: 'http://localhost:80'
};
app.use(cors<Request>(corsOptions));

// connect to postsql and sync database, set force: ture to allow drop existing tables and re-sync database
sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log(err.message);
  });

// difine routes
app.use('/', router);

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at port: ${port}...`);
});
