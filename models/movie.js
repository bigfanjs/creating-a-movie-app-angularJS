'use strict';

module.exports = function (mongoose, db) {
  const schema = new mongoose.Schema({
    title: String,
    genre: String,
    runningTime: Number,
    releaseDate: {
      month: Number,
      day: Number,
      year: Number
    },
    overview: String,
    director: String,
    boxOffice: Number,
    budget: Number,
    country: String,
    language: String,
    cast: [{
      actor: String,
      character: String,
      avatar: {
        file: String,
        url: String
      },
      star: Boolean,
      gender: String
    }],
    cover: {
      file: String,
      url: String
    },
    meta: {
      dateAdded: String,
      favorites: Number,
      watches: Number
    } 
  });

  return db.model('movie', schema);
};