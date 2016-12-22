const movieApp = require('angular').module('movieApp');

movieApp.constant('MovieListPageCount', 12);

movieApp.controller('moviesListCtrl', require('./movies-list-ctrl'));