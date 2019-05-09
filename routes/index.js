var express = require('express');
var router = express.Router();
var { fetchAll, addComment, fetchMovieComments } = require('../controllers/movie')

/**
 * App routes
 */
router.get('/movies', fetchAll); //Fetch moview
router.get('/movies/:movie_id/comments', fetchMovieComments) //Fetch movie comments
router.post('/movie/comment', addComment) //Add a comment to movie

module.exports = router;