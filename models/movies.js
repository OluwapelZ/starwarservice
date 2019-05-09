const db = require('../config/db');

/**
 * Movie table
 */
const Movie = db.bookshelf.Model.extend({
    tableName: 'movie',

    fetchAllMovies: function() {
        return this.fetchAll({require: true});
    }
});

module.exports = Movie;
