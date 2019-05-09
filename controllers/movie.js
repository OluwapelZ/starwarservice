'use strict';
const { sendSuccess, sendError } = require('./base');
const MovieService = require('../services/movie');
const { dateToUTC, getPublicIp } = require('../utils/index');

class Movie {

    fetchAll (req, res) {
        const movies =  MovieService.getAllMovies();
    
        if (movies) {
            return sendSuccess(res, movies);
        }
        return sendError(res, 500);
    };
    
    addComment (req, res)  {
        if (!req.body.movie_id || !req.body.comment) {
            return sendError(res, 400);
        }

        console.log('UTC: ' + dateToUTC());
        console.log('IP: ' + getPublicIp());

        let data = {
            movieId: req.body.movie_id,
            comment: req.body.comment,
            utcDate: dateToUTC(),
            publicId: getPublicIp(req)
        };

        console.log('Data: ' + JSON.stringify(data));
    
        const response = MovieService.saveComment(data);
    
        if (response) {
            return sendSuccess(res, response);
        }
        return sendError(res, 500);   
    };
    
    fetchMovieComments (req, res) {
        var movieId = req.params.movie_id;
    
        if (movieId.length >= 500) {
            return sendError(res, 400);
        }
    
        const response = MovieService.retrieveMovieComments(movieId);
    
        if (response) {
            return sendSuccess(res, response);
        }
        return sendError(res, 500);
    }

}

module.exports = new Movie();
