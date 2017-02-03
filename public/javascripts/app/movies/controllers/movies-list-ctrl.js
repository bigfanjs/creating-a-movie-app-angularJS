module.exports = function ($scope, $http, $location, movieListPageCount) {
  $scope.pageSize = movieListPageCount;

  $scope.fields = [
    'title',
    'releaseDate',
    'popularity',
  ];

  $scope.genreFilter = function ( movie ) {
    var genre = null;

    if ( $scope.genre ) {
      genre = $scope.genre;
    }

    const rege = new RegExp(genre, 'i');

    return genre === null || movie.genre.match( rege );
  };

  $scope.releaseYearFilter = function (movie) {
    var
      releaseYear = null,
      regexp;

    if ($scope.releaseYear) {
      releaseYear = $scope.releaseYear;
      regexp = new RegExp(releaseYear, 'i');
    }

    return releaseYear === null ||
      new Date(movie.releaseDate).getFullYear().toString().match( regexp );
  };

  $scope.viewMovie = function (id) {
    $location.path('/movies/view/' + id);
  };
};