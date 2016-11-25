module.exports = function () {
  return function (data, size) {
    if (!Array.isArray( data )) {
      return [];
    }

    const
      length = Math.ceil(data.length / size),
      result = [];

    for (let i = 0; i < length; i++) {
      result.push( i );
    }

    return result;
  };
};