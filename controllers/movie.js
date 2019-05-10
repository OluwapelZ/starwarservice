'use strict';
const { sendSuccess, sendError } = require('./base');
const MovieService = require('../services/movie');
const utils = require('../utils/index');
const getMapping = require('../constants/index');

class Movie {

    fetchMovies (req, res) {
        const response = MovieService.fetchRemoteFilms()
            .then((resp) => {
                return resp;
            })
            .catch((error) => {
                throw error;
            });

            if (response) {
                return sendSuccess(res, getMapping("FETCH_MOVIE_SUCCESS"), resp);
            }
            
            return sendError(res, getMapping("FETCH_MOVIE_ERROR"), 500); 
    }

    listCharacters(req, res) {
        const movieId = req.body.movie_id;
        const queryObj = JSON.parse(req.params.obj);

        const filter_params = {
            filter_gender: queryObj.filter_gender,
        }

        const sort_params = {
            sort_name: queryObj.sort_name,
            sort_gender: queryObj.sort_gender,
            sort_height: queryObj.sort_height
        }

        //Check if movie exists
       const isMovieId = MovieService.fetchMovieById(movieId);
       if(!isMovieId) {
           return sendError(res, getMapping("MOVIE_NOT_FOUND"), 404);
       }


    }
    
    addComment (req, res)  {
        if (!req.body.movie_id || !req.body.comment) {
            return sendError(res, getMapping("INVALID_ARGUMENTS"), 400);
        }

        //Check if movie exists
       const isMovieId = MovieService.fetchMovieById(req.body.movie_id);
       if(!isMovieId) {
           return sendError(res, getMapping("MOVIE_NOT_FOUND"), 404);
       }

        const utcDateResp = utils.dateToUTC();
        const publicIpAddress = utils.getPublicIp(req);

        let data = {
            movieId: req.body.movie_id,
            comment: req.body.comment,
            utcDate: utcDateResp,
            publicIp: publicIpAddress
        };

       //Check if movie exists
       const isMovieId = MovieService.fetchMovieById(data.movieId);
       if(!isMovieId) {
           return sendError(res, getMapping("MOVIE_NOT_FOUND"), 404);
       }

        if (data.comment.length >= 500) {
            return sendError(res, getMapping(COMMENT_LENGTH_ERROR), 400);
        }
    
        const response = MovieService.saveComment(data);
    
        if (response) {
            return sendSuccess(res, getMapping("ADD_COMMENT_SUCCESS"), response);
        }
        return sendError(res, getMapping("ADD_COMMENT_ERROR"), 500);   
    };
    
    fetchMovieComments (req, res) {
        var movieId = req.params.movie_id;

        //Check if movie exists
       const isMovieId = MovieService.fetchMovieById(movieId);
       if(!isMovieId) {
           return sendError(res, getMapping("MOVIE_NOT_FOUND"), 404);
       }
    
        const response = MovieService.retrieveMovieComments(movieId);
        if (response) {
            return sendSuccess(res, getMapping("FETCH_MOVIE_COMMENT_SUCCESS"), response);
        }
        return sendError(res, getMapping("FETCH_MOVIE_COMMENT_ERROR"), 500);
    }

}

module.exports = new Movie();
