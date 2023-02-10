const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app= express();
const port = process.env.PORT;

// set up middlewares
// use body-parser to parse incoming request bodies (json, urlencoded), under req.body property
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// enable CORS 
const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// connect to postsql
// sync database, set force: ture to allow drop existing tables and re-sync database
const db = require('./src/models');
db.sequelize.sync({ force: true })
.then(()=>{
    console.log('Synced db.');
})
.catch((err)=>{
    console.log(err.message);
});

// difine routes
app.get('/', (req, res) => {
    res.send('Exprsss + TypeScript Server...');
});;

require('./src/routes/task.routes')(app);

app.listen(port, () => {
    console.log(`[server]: Server is running at port: ${port}...`);
});