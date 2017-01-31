module.exports = function ($scope, $element, $location, $routeParams) {
  const id = $routeParams.id;

  const movie = { cast: [{}], cover: {} };

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
  };

  $scope.handleFileSelect = function () {
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      const url = e.target.result;

      $scope.$apply(function () {
        movie.cover.url = url;
      });
    };

    fileReader.readAsDataURL($scope.movieCover);
  };
};