import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './src/routes/index.js';
import db from './src/models/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

// set up middlewares
// use body-parser to parse incoming request bodies (json, urlencoded), under req.body property
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// enable CORS
const corsOptions = {
  origin: 'http://localhost:4200'
};
app.use(cors(corsOptions));

// connect to postsql
// sync database, set force: ture to allow drop existing tables and re-sync database
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log(err.message);
  });

// use firebase admin middleware to decode token and check its validity, applied to all routes
// const firebaseTokenValidation = require('./src/middlewares');
// app.use(firebaseTokenValidation.decodeToken);

// difine routes
app.get('/', (req, res) => {
  res.send('Exprsss + TypeScript Server...');
});

app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at port: ${port}...`);
});
