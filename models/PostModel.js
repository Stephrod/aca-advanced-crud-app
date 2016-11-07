const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

// TODO: Write your PostModel schema here
// Hint: Don't for get to export it!
const blogSchema = new Schema ({
  'title' : String,
  'author': {type: String, required: true},
  'date': String,
  'text': String
});

module.exports = mongoose.module('posts', blogSchema);
