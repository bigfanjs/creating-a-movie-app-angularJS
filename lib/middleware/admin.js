'use strict';

const Admin = require('../../models/')('admin');

function send401( res ) {
  res.status(401).end('access deneid');
}

exports.isAuthenticated = function () {
  return function (req, res, next) {
    const uid = req.session._id;

    if ( uid ) {
      Admin.findOne({ _id: uid }, (err, admin) => {
        if ( err ) { return res.status(404).end( err ); }

        if (admin === null || !admin._id) {
          return send401(res);
        }

        res.admin = res.locals.admin = admin;
        next();
      });
    } else {
      return send401(res);
    }
  };
};