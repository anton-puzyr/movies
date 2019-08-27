const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');

const Movie = require('../models');
const { sanitizeKey, windowed, upload } = require('../utils');

// @route GET /movies
router.get('/movies', (req, res) => {
  Movie.find().then(result => res.json(result));
});

// @route POST /add-movie
router.post('/add-movie', (req, res) => {
  const movie = {
    _id: new ObjectID(),
    title: req.body.title,
    releaseYear: req.body.releaseYear,
    format: req.body.format,
    stars: req.body.stars,
  };

  Movie.create(movie)
    .then(result => res.send(result))
    .catch(error => res.send(error));
});

// @route DELETE /movies
router.delete('/movies/:id', (req, res) => {
  Movie.findOneAndDelete(req.params.id)
    .then(result => res.send({ id: result._id }))
    .catch(error => res.send(error));
});

// @route POST /import
router.post('/import', (req, res) => {
  upload(req, res, err => {
    if (err) {
      res.end('Error uploading file');
    } else {
      res.end('File is uploaded');

      const lines = fs
        .readFileSync('./api/uploads/file')
        .toString()
        .split('\n')
        .filter(el => el !== '');

      const records = windowed(lines, 4)
        .map(tuple =>
          tuple.reduce((acc, keyValue) => {
            const [key, value] = keyValue.split(':');
            return Object.assign(acc, { [sanitizeKey(key)]: value.trim() });
          }, {}),
        )
        .map(record => Object.assign(record, { stars: record['stars'].split(', ') }));

      Movie.insertMany(records, (error, docs) =>
        error
          ? console.error(error)
          : console.log('Multiple documents inserted to collection', docs),
      );
    }
  });
});

module.exports = router;
