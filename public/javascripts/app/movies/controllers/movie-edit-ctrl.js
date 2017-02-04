module.exports = function ($scope, $element, $location, $routeParams, Movie, fileUpload) {
  $scope.avatars = [];
  $scope.collections = {
    genre: [
      'Action',
      'Drama',
      'Comedy',
      'Adventure',
      'Romance'
    ],
    country: [
      'America',
      'England',
      'France',
      'China',
      'Germany',
      'India',
      'Spain'
    ],
    language: [
      'English',
      'Frensh',
      'Chinese',
      'German',
      'Indian',
      'Spanish'
    ]
  };

  if (typeof $routeParams.id !== 'undefined') {
    $scope.movie = Movie.get({id: $routeParams.id});
  } else {
    $scope.movie = new Movie({cast: [{}]});
  }

  $scope.save = function () {
    Movie.save($scope.movie, function (newMovie) {
      if ($scope.avatars.length) {
        fileUpload.uploadFile(
          'avatars',
          $scope.avatars,
          '/api/movies/' + newMovie._id + '/avatars'
        );
      }

      if ($scope.movieCover != null) {
        fileUpload.uploadFile(
          'cover',
          $scope.movieCover,
          '/api/movies/' + newMovie._id + '/cover'
        );
      }

      $location.path('/admin/dashboard');
    });
  };

  $scope.cancel = function () {
    $location.path('/admin/dashboard');
  };

  $scope.addActor = function () {
    $scope.movie.cast.push({});
  };

  $scope.deleteActor = function (actor) {
    $scope.movie.cast.splice($scope.movie.cast.indexOf(actor), 1);
  };

  $scope.selectCover = function () {
    $element[0].querySelector('#cover-input').click();
  };

  $scope.handleFileSelect = function (e, name, blob) {
    const
      fileReader = new FileReader(),
      target = e.target,
      parent = target.parentNode,
      img = parent.querySelector(`#${name}-img`);

    if (blob == null) { return; }

    fileReader.onload = function (e) {
      const url = e.target.result;

      $scope.$apply(function () {
        img.src = url;
      });
    };

    fileReader.readAsDataURL(blob);
  };

  $scope.selectAvatar = function ($event) {
    const
      target = $event.target,
      parent = target.parentNode;

    parent.querySelector('#avatar-input').click();
  };
};