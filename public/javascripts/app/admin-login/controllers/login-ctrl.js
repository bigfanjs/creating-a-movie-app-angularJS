module.exports = function ($scope, $location, authService) {
  $scope.login = function (username, password) {
    authService
      .login(username, password)
      .then(
        function ( result ) {
          $location.path('/admin/dashboard');
        },
        function ( err ) {
          $location.path('/admin/login');
        }
      );
  };

  $scope.logout = function () {
    authService
      .logout()
      .then(
        function () {
          $location.path('/admin/login');
        },
        function ( err ) {
          $location.path('/admin/dashboard');
        }
      );
  };
};