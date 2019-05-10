var express = require('express');
var router = express.Router();
var movie = require('../controllers/movie')

/**
 * App routes
 */
router.get('/movies', movie.fetchMovies); //Fetch moview
router.get('/movies/:movie_id/comments', movie.fetchMovieComments) //Fetch movie comments
router.post('/movie/comment', movie.addComment) //Add a comment to movie
router.get('/movie/:movie_id/characters', movie.listCharacters);

module.exports = router;