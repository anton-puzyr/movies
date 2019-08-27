const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');
const mkdirp = require('mkdirp');
const mongoose = require('mongoose');

const importPath = './api/uploads/file';

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
  mkdirp('./api/uploads', dirError => {
    if (dirError) throw dirError;
    console.log('Uploads directory created');
  });

  upload(req, res, err => {
    if (err) {
      res.send('Error uploading file');
    } else {
      const lines = fs
        .readFileSync(importPath)
        .toString()
        .split('\n')
        .filter(el => el !== '');

      const records = windowed(lines, 4)
        .map(tuple =>
          tuple.reduce(
            (acc, keyValue) => {
              const [key, value] = keyValue.split(':');
              return Object.assign(acc, { [sanitizeKey(key)]: value.trim() });
            },
            { _id: new mongoose.mongo.ObjectId() },
          ),
        )
        .map(record => Object.assign(record, { stars: record['stars'].split(', ') }));

      Movie.insertMany(records, (error, docs) => {
        error ? console.error(error) : res.send(docs);
      });
    }
  });
});

module.exports = router;
