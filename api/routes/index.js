const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const multer = require('multer');
const parse = require('csv-parse');
const transform = require('stream-transform');

const Movie = require('../models');

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
    err ? res.end('Error uploading file') : res.end('File is uploaded');
  });
});

/** Configure file upload **/
const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, './api/uploads'),
  filename: (req, file, callback) => callback(null, file.fieldname + '.csv'),
});

const upload = multer({ storage }).single('file');

/** Parse csv file **/

module.exports = router;
