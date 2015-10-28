var mongoose = require('mongoose');

var PhotoSchema = mongoose.Schema({
  title: String,
  photo: String,
  author: String

  
});

module.exports = mongoose.model('Photo', PhotoSchema);