'use strict';
const Comment = require('../models/comment');
const Movie = require('../models/movies');
const axios = require('axios');
const util = require('util');
const config = require('../config/index');

class MovieService {

    fetchRemoteFilms () {
        axios.get("https://swapi.co/api/films/")
            .then((response) => {
                const moviesArray = response.data.results;

                const responseArray = [];
                moviesArray.forEach(element => {
                    const count = this.getCommentCountByTitle(element.title)
                        .then((response) => {
                            return response;
                        })
                        .catch((error) => {
                            return error;
                        });

                        let obj = {
                            title: element.title,
                            opening_crawl: element.opening_crawl,
                            release_date: element.release_date,
                            comment_count: count
                        }
                        responseArray.push(obj);
                });

                //sort films by date
                responseArray.sort(function(o1,o2){
                    if (o1)    return -1;
                    else if(o2) return  1;
                    else return  0;
                });

                return responseArray;
            })
            .catch((error) => {
                throw error;
            });
    }

    getAllMovies ()  {
        return Movie.fetchAll({require: true})
            .then((movies) => {
                return JSON.parse(movies);
            })
            .catch((error) => {
                throw JSON.stringify(error);
            })
    }

    fetchMovieById (movieId) {
        return Movie.where({movie_id: movieId}).fetch()
            .then((movie) => {
                if (movie)
                    return movie
            })
            .catch((error) => {
                throw JSON.stringify(error);
            })
    }
    
    saveComment (data)  {
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
    
    retrieveMovieComments (movieId) {
        return Comment.where({movie_id: movieId}).orderBy('created_at', 'DESC').fetch()
            .then((comments) => {
                if(comments)
                    return Comment.parse(comments);
            })
            .catch((error) => {
                throw JSON.stringify(error);
            })
    }

    async getCommentCountByTitle (title) {
        const movieId = await Movie.where('title', title).fetch();

        return new Promise((resolve, reject) => {
            Comment.where({movie_id: movieId.id}).count('comment')
            .then((count) => {
                if (count)
                resolve(count);
            })
            .catch((error) => {
                reject(error);
                throw JSON.stringify(error);
            })
        })
    }

}
module.exports = new MovieService();