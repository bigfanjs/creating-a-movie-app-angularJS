'use strict';

module.exports = function (mongoose, db) {
  const schema = new mongoose.Schema({
    title: String,
    genre: String,
    runningTime: Number,
    releaseDate: Date,
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
      likes: {type: Number, default: 0},
      dislikes: {type: Number, default: 0},
      watches: {type: Number, default: 0}
    }
  }, {
    timestamps: true
  });

  return db.model('movie', schema);
};