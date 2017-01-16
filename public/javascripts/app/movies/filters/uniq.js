const isObject = require('lodash/isObject');

module.exports = function () {
  return function(data, field, deep_field) {
    var embedded = null;

    if (arguments.length === 3) {
      embedded = field;
      field = deep_field;
      deep_field = null;
    }

    if (Array.isArray(data) && typeof field === 'string') {
      return data.slice(0).filter((movie, idx, movies) => {
        const props = movies.map(obj => {
          return embedded ? obj[embedded][field] : obj[field];
        });
        const prop = embedded ? movie[embedded][field] : movie[field];
        return props.indexOf( prop ) == idx;
      });
    } else {
      return data;
    }
  };
};