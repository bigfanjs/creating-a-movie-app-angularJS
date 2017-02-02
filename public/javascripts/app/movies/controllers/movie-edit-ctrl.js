module.exports = function ($scope, $element, $location, $routeParams, fileUpload) {
  const id = $routeParams.id;

  const movie = { cast: [{}] };

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

  if (typeof id !== 'undefined') {
    $scope.movie = $scope.movies.find(movie => {
      return movie._id === id;
    });
  } else {
    $scope.movie = movie;
  }

  $scope.save = function () {
    new $scope
      .moviesResource(movie)
      .$save()
      .then(newMovie => {
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

        $scope.movies.push(newMovie);
      });
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