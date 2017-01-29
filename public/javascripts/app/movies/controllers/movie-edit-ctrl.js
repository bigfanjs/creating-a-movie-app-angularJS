module.exports = function ($scope, $element, $location, $routeParams, fileUpload) {
  const id = $routeParams.id;

  const movie = { cast: [{}] };

  if (typeof id !== 'undefined') {
    $scope.movie = $scope.data.movies.find(movie => {
      return movie._id === id;
    });
  } else {
    $scope.movie = movie;
  }

  $scope.save = function () {

  };

  $scope.cancel = function () {
    $location.path('/admin/dashboard');
  };

  $scope.addActor = function () {
    movie.cast.push({});
  };

  $scope.deleteActor = function (actor) {
    movie.cast.splice(movie.cast.indexOf(actor), 1);
  };

  $scope.selectCover = function () {
    $element[0].querySelector('#cover-input').click();

    $scope.$on('file-selected', function () {
      fileUpload
        .handleFileSelect($scope.movieCover)
        .then(
          function (url) {
            $scope.$apply(function () {
              movie.cover.url = url;
            });
          },
          function (err) {
            console.error(err);
          }
        );
    });
  };
};