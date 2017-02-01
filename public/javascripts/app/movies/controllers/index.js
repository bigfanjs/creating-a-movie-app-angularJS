const movieApp = require('angular').module('movieApp');

movieApp.constant('movieListPageCount', 12);
movieApp.constant('adminPageCount', 30);
movieApp.constant('baseURL', '/api/movies/');

movieApp.controller('mainCtrl', require('./main-ctrl'));
movieApp.controller('moviesListCtrl', require('./movies-list-ctrl'));
movieApp.controller('movieItemCtrl', require('./movie-item-ctrl'));
movieApp.controller('movieEditCtrl', require('./movie-edit-ctrl'));
movieApp.controller('adminCtrl', require('./admin-ctrl'));