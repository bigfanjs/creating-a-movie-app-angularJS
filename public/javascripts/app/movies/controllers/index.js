const movieApp = require('angular').module('movieApp');

movieApp.constant('MovieListPageCount', 12);

movieApp.controller('moviesListCtrl', require('./movies-list-ctrl'));
// movieApp.controller('movieListItemCtrl', require('./movie-list-item-ctrl'));
// movieApp.controller('filterBarCtrl', require('./filter-bar-ctrl'));