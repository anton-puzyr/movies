const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  title: String,
  releaseYear: Number,
  format: String,
  stars: String,
});

module.exports = mongoose.model('Movie', MovieSchema);
