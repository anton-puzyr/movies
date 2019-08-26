const express = require('express');
const router = express.Router();

const Movie = require('../models');

// @route GET /movies
router.get('/movies', (req, res) => {
  Movie.find().then(result => res.json(result));
});

router.post('/import', () => console.log('loaded'));

module.exports = router;
