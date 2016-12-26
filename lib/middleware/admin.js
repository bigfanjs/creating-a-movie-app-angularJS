'use strict';

const Admin = require('../../models/')('admin');

module.exports = function () {
  return function (req, res, next) {
    const uid = req.session.uid;

    if ( uid ) {
      Admin.findOne({ _id: uid }, (err, admin) => {
        if ( err ) {
          return next( err );
        }

        if (admin === null || !admin._id) {
          return next();
        }

        res.admin = admin;
        next();
      });
    } else {
      return next();
    }
  };
};