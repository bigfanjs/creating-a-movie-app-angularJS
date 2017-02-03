module.exports = function ($filter) {
  return (input, arg) => {
    if (arg === 'releaseDate') {
      return $filter('date')(input);
    } else {
      return input;
    }
  };
};