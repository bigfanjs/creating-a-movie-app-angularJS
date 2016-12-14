module.exports = function ($http, Session) {
  return {
    login: function (username, password) {
      var user = false;

      $hhtp.post('/admin/login',{ username, password })
        .then(
          function (data, status) {
            if (status === 200) {
              user = true;
            } else {
              user = false;
            }
          },
          function () {}
        );
    },
    logout: function () {

    },
    isAuthenticated: function () {

    }
  };
};