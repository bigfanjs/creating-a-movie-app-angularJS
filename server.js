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
      path: 'the-campaign.jpg',
      name: 'avatar' },
    story: 'some text for the movie\'s story' },
  { title: "Death pool",
    type: 'Action',
    runningTime: '103mins',
    releaseYear: '2014',
    cover: {
      path: 'the-campaign.jpg',
      name: 'interstellar' },
    story: 'some text for the movie\'s story' },
  { title: "Showlin Soccer",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2006',
    cover: {
      path: 'the-campaign.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "The campaign",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2012',
    cover: {
      path: 'the-campaign.jpg',
      name: 'the-campaign' },
    story: 'some text for the movie\'s story' },
  { title: "Where is the millers",
    type: 'comidian',
    runningTime: '132mins',
    releaseYear: '2013',
    cover: {
      path: 'the-campaign.jpg',
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