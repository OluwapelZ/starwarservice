'use strict';
const Comment = require('../models/comment');
const Movie = require('../models/movies');

const getAllMovies = () => {
    return Movie.fetchAllMovies()
        .then((movies) => {
            return JSON.parse(movies);
        })
        .catch((error) => {
            throw JSON.stringify(error);
        })
}

const saveComment = (data) => {
    return Comment.forge().save({
            comment: data.comment,
            public_ip: data.publicIp,
            utc_date: data.utcDate,
            movie_id: data.movieId
        })
        .then((response) => {
            if(response) {
                return JSON.parse(response);
            }
        })
        .catch((error) => {
            throw JSON.stringify(error);
        })
}

const retrieveMovieComments = (movieId) => {
    return Comment.where({movie_id: movieId}).orderBy('created_at', 'DESC').fetch()
        .then((comments) => {
            if(comments)
                return Comment.parse(comments);
        })
        .catch((error) => {
            throw JSON.stringify(error);
        })
}

module.exports = {
    getAllMovies,
    saveComment,
    retrieveMovieComments
}