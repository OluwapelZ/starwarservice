var express = require('express');
var router = express.Router();

/**
 * App routes
 */
router.get('/movies', (req, res) => {}); //Fetch moview
router.get('/movies/:movie_id/comments', (req, res) => {}) //Fetch movie comments
router.post('/movie/comment', (req, res) => {}) //Add a comment

module.exports = router;