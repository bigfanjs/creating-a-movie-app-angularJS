const movieApp = require('angular').module('movieApp');

movieApp.constant('movieListPageCount', 12);
movieApp.constant('adminPageCount', 30);

movieApp.controller('mainCtrl', require('./main-ctrl'));
movieApp.controller('moviesListCtrl', require('./movies-list-ctrl'));
movieApp.controller('adminCtrl', require('./admin-ctrl'));