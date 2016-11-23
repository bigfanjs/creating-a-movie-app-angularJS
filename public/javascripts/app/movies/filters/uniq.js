module.exports = function () {
  return (data, prop) => {
    if ( Array.isArray( data ) && typeof prop === 'string') {
      return data.slice(0).filter((movie, idx, movies) => {
        var arr = movies.map(obj => {
          return obj[ prop ];
        });

        return arr.indexOf( movie[ prop ] ) == idx;
      });
    } else {
      return data;
    }
  };
};