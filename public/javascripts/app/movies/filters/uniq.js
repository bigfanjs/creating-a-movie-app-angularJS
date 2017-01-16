module.exports = function () {
  return (data, prop) => {
    if ( Array.isArray( data ) && typeof prop === 'string') {
      return data.slice(0).filter((movie, idx, movies) => {
        const props = movies.map(obj => obj[ prop ]);
        return props.indexOf( movie[ prop ] ) == idx;
      });
    } else {
      return data;
    }
  };
};