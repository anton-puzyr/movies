const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movies = require('./routes');

const app = express();
const port = 3000;
const dbUrl = 'mongodb://localhost:27017/movies';

app.use(bodyParser.json());
app.use(cors());
app.use('/', movies);

mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => console.log('Connected to the database!'))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Listening on port ${port}`));
