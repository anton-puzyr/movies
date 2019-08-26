const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

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

module.exports = router;
