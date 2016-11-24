module.exports = function () {
  return (data, page, size) => {
    if ( arguments.length < 3 ||
         Array.isArray(data)  ||
         !isFinite( page )    ||
         !isFinite( size )) {
      throw TypeError('The rage filter didn\'t used propertly');
    }

    const
      pages = page * size,
      result = pages.slice(pages - size, Math.min(pages, data.length));

    return result;
  };
};