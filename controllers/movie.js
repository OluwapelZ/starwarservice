'use strict';
const { sendSuccess, sendError } = require('./base');
const {getAllMovies, saveComment, retrieveMovieComments } = require('../services/movie');
const { dateToUTC, getPublicIp } = require('../utils/index');

const fetchAll = (req, res) => {
    const movies =  getAllMovies();

    if (movies) {
        return sendSuccess(res, movies);
    }
    return sendError(res, 500);
};

const addComment = (req, res) => {
    let data = {
        movieId: req.body.movie_id,
        comment: req.body.comment,
        utcDate: dateToUTC(),
        publicId: getPublicIp(req)
    };

    if (!data.movieId || !data.comment || !data.utcDate || !publicId) {
        return sendError(res, 400);
    }

    const response = saveComment(data);

    if (response) {
        return sendSuccess(res, response);
    }
    return sendError(res, 500);   
};

const fetchMovieComments = (req, res) => {
    var movieId = req.params.movie_id;

    if (movieId.length >= 500) {
        return sendError(res, 400);
    }

    const response = retrieveMovieComments(movieId);

    if (response) {
        return sendSuccess(res, response);
    }
    return sendError(res, 500);
}

module.exports = {
    fetchAll,
    addComment,
    fetchMovieComments
}