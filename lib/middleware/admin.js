'use strict';

const Admin = require('../../models/')('admin');

function send401( res ) {
  res.status(401).end('access deneid');
}

module.exports = function () {
  return function (req, res, next) {
    const uid = req.session._id;

    if ( uid ) {
      Admin.findOne({ _id: uid }, (err, admin) => {
        if ( err ) { return res.status(404).end( err ); }

        if (admin === null || !admin._id) {
          return send401(res);
        }

        res.admin = admin;
        next();
      });
    } else {
      return send401(res);
    }
  };
};