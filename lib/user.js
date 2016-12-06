'use strict';

const
  bcrypt = require('bcrypt'),
  isFunction = require('lodash/isFunction'),
  forEach = require('lodash/forEach');

const Admin = require('../models/')('admin');

const
  create = Object.create,
  assign = Object.assign;

module.exports = {
  create: function ( options ) {
    options = options || {};

    const user = create( this );

    assign(user, options);

    user.init = function ( options ) {
      if ( options ) {
        if (isFunction( options )) {
          options.call( user );
        } else {
          forEach(options, (value, key) => {
            if (isFunction( value )) {
              value.call( user );
              delete options[ key ];
            }
            
            assign(user, options);
          });
        }
      }

      return user;
    };

    return user;
  },
  save: function ( callback ) {
    this.hashPassword((err, password) => {
      if ( err ) { return callback( err ); }

      Admin.save({
        name: this.username,
        password: password
      }, (err, admin) => {
        if ( err ) { return callback( err ); }

        callback(null, admin);
      });
    });
  },
  update: function ( callback ) {
    this.hashPassword((err, password) => {
      if ( err ) { return callback( err ); }

      Admin.update(
        { _id: this._id },
        { name: this.username,
          password: password },
        { multi: false },
        (err, admin) => {
          if ( err ) { return callback( err ); }

          callback(null, admin);
        }
      );
    });
  },
  hashPassword: function ( callback ) {
    bcrypt.genSalt(12, (err, salt) => {
      if ( err ) { return callback( err ); }

      bcrypt.hash(this.password, salt, (err, hash) => {
        if ( err ) { return callback( err ); }

        callback(null, hash);
      });
    });
  },
  authenticate: function (name, password, callback) {
    Admin.findOne({ name }, (err, admin) => {
      if ( err ) { return callback( err ); }
      if (admin === null || (admin && !admin._id)) {
        return callback();
      }

      bcrypt.compare(password, admin.password, (err, res) => {
        if ( err ) { return callback( err ); }

        if (res === true) {
          callback(null, admin);
        } else {
          callback();
        }
      });
    });
  }
};