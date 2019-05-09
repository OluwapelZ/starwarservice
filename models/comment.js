const db = require('../config/db');

/**
 * Comment table
 */
const Comment = db.bookshelf.Model.extend({
    tableName: 'comment',
    hasTimeStamp: true
});

module.exports = Comment
