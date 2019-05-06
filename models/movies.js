const db = require('../config/db');

/**
 * Movie table
 */
const Movie = db.bookshelf.Model.extend({
    tableName: 'movie'
});

module.exports = {
    Movie
}
