const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app= express();
const port = process.env.PORT;

// set up middlewares
// use body-parser to parse incoming request bodies, under req.body property
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
// enable CORS 
app.use(cors());

// difine routes
app.get('/', (req, res) => {
    res.send('Exprsss + TypeScript Server...');
});;

app.listen(port, () => {
    console.log(`[server]: Server is running at port: ${port}...`);
});