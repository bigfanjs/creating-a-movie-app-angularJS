module.exports = function ($scope, $http, $window) {
  $scope.login = function (username, password) {
    $http.post(
      '/admin/login',
      { username, password },
      { withCredentials: true }
    ).then(null,
      function ( data ) {
        $window.location.href = data.redirect;
      });
  };
};