'use strict';

module.exports = function (mongoose, db) {
  const schema = new mongoose.Schema({
    title: String,
    type: String,
    runningTime: String,
    releaseYear: Number,
    cover: {
      path: String,
      name: String
    },
    story: String,
    meta: {
      dateAdded: Number,
      favorites: Number,
      watches: Number
    }
  });

  return db.model('movie', schema);
};