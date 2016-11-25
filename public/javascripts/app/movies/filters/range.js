module.exports = function () {
  return function (data, page, size) {
    if ( arguments.length < 3 ||
         !Array.isArray(data) ||
         !isFinite( page )    ||
         !isFinite( size )) {
      return;
    }

    const
      pages = page * size,
      result = data.slice(pages - size, Math.min(pages, data.length));

    return result;
  };
};