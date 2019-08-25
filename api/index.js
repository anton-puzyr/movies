const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const dbUrl = 'mongodb://localhost:27017';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Listening on port ${port}`));

MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log('Connected to the database!');

  const db = client.db('movies');

  db.collection('movies', (collectionError, collection) => {
    /* Get all movies */
    collection.find().toArray((queryError, items) => {
      if (queryError) throw queryError;

      app.get('/movies', (req, res) => res.send(items));
    });
  });
});
