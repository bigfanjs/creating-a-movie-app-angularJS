'use strict';

const Admin = require('../../models/');

exports.authenticated = function () {
  return function (req, res, next) {
    const uid = req.session._id;

    if ( !uid ) { return next(); }

    Admin.findOne({ _id: uid }, (err, admin) => {
      if ( err ) return next( err );

      if (admin && !admin._id) {
        return next();
      }

      res.admin = res.locals.admin = admin;
      next();
    });
  };
};