const forEach = require('lodash/forEach');

module.exports = function () {
  return function (obj, filterFn) {
    const result = {};

    forEach(obj, (value, key) => {
      if (filterFn(key)) {
        result[ key ] = value;
      }
    });

    return result;
  };
};