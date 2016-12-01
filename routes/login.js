'use strict';

const admin = require('../lib/user');

function send404(res, err) {
  res.status(404).end(err);
}

exports.submit = function (req, res, next) {
  const body = req.body;

  admin.authenticate(body.name, body.password, (err, admin) => {
    if ( err ) { return send404(res, err); }

    if (admin && admin._id) {
      req.session.uid = admin._id;
      res.status(200).end( admin );
    } else {
      res.status(401).end();
    }
  });
};

exports.logout = function (req, res, next) {
  req.session.destroy(err => {
    if ( err ) { return send404(res, err); }

    res.status(204).json('session destroy');
  });
};