module.exports = function ($resource) {
  return $resource('/api/movies/:id');
};