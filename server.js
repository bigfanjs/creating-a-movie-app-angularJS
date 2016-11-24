'use strict';

const
  path = require('path'),
  express = require('express'),
  app = express();

const tempData = [
  { title: "Titanic",
    type: 'Romantic',
    runningTime: '123mins',
    releaseYear: '1999',
    cover: {
      path: 'default.jpg',
      name: 'avatar' },
    story: 'some text for the movie\'s story' },
  { title: "Death pool",
    type: 'Action',
    runningTime: '103mins',
    releaseYear: '2014',
    cover: {
      path: 'default.jpg',
      name: 'interstellar' },
    story: 'some text for the movie\'s story' },
  { title: "Showlin Soccer",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2006',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "The campaign",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2012',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "The jungle book",
    type: 'adventure',
    runningTime: '132mins',
    releaseYear: '2015',
    cover: {
      path: 'default.jpg',
      name: 'jungle-book' },
    story: 'some text for the movie\'s story' },
  { title: "Total Recal",
    type: 'Action',
    runningTime: '110mins',
    releaseYear: '2012',
    cover: {
      path: 'default.jpg',
      name: 'total-recal' },
    story: 'some text for the movie\'s story' },
  { title: "The Gravity",
    type: 'Adventure',
    runningTime: '103mins',
    releaseYear: '2013',
    cover: {
      path: 'default.jpg',
      name: 'interstellar' },
    story: 'some text for the movie\'s story' },
  { title: "Thor",
    type: 'Imagenary',
    runningTime: '132mins',
    releaseYear: '2010',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "Captine america",
    type: 'Imagenary',
    runningTime: '132mins',
    releaseYear: '2014',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "Th change-up",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2011',
    cover: {
      path: 'default.jpg',
      name: 'change-up' },
    story: 'some text for the movie\'s story' },
  { title: "Superman",
    type: 'Action',
    runningTime: '123mins',
    releaseYear: '2008',
    cover: {
      path: 'default.jpg',
      name: 'superman' },
    story: 'some text for the movie\'s story' },
  { title: "Spiderman",
    type: 'Action',
    runningTime: '103mins',
    releaseYear: '2013',
    cover: {
      path: 'default.jpg',
      name: 'amawing-spiderman' },
    story: 'some text for the movie\'s story' },
  { title: "The conjuring 1",
    type: 'horror',
    runningTime: '132mins',
    releaseYear: '2012',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "The conjuring 2",
    type: 'horror',
    runningTime: '132mins',
    releaseYear: '2015',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "Ted 2",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2015',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "The book theif",
    type: 'Romantic',
    runningTime: '123mins',
    releaseYear: '2013',
    cover: {
      path: 'default.jpg',
      name: 'avatar' },
    story: 'some text for the movie\'s story' },
  { title: "Tronsportor",
    type: 'Action',
    runningTime: '103mins',
    releaseYear: '2009',
    cover: {
      path: 'default.jpg',
      name: 'interstellar' },
    story: 'some text for the movie\'s story' },
  { title: "Knock Knock",
    type: 'Action',
    runningTime: '132mins',
    releaseYear: '2013',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "17 again",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2011',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "Interstaller",
    type: 'Imagenary',
    runningTime: '132mins',
    releaseYear: '2014',
    cover: {
      path: 'default.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' }
];

app.use(express.static(path.join(__dirname, './public')));

app.get('/api/movies', function ( req, res ) {
  res.json( tempData );
});

app.listen(8080, function () {
  console.log('Listening on port 8080');
});