'use strict';

module.exports = function (mongoose, db) {
  const schema = new mongoose.Schema({
    username: String,
    password: String
  });

  return db.model('admin', schema);
};