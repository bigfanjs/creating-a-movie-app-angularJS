module.exports = function ($http, $q) {
  var user = null;

  return {
    isAuth: function () {
      if ( user ) {
        return true;
      } else {
        return false;
      }
    },
    conformLogin: function () {
      return $http
        .get('/session')
        .success(data => {
          user = true;
        })
        .error(data => {
          user = false;
        });
    },
    login: function (username, password) {
      const dfd = $q.defer();

      $http
        .post('/admin/login', {username, password})
        .then(
          data => {
            if (data.status === 200) {
              dfd.resolve();
            } else {
              dfd.reject();
            }
          },
          function ( err ) {
            dfd.reject( err );
          }
        );

      return dfd.promise;
    },
    logout: function () {
      const dfd = $.defer();

      $http
        .get('/admin/logout')
        .then(
          data => {
            if (data.status == 200) {
              dfd.resolve();
            } 
          },
          err => {
            dfd.reject( err );
          }
        );

      return dfd.promise;
    }
  };
};