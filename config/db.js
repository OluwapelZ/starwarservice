const Bookshelf = require('bookshelf');
const Knex = require('knex');
const { config } = require('./');

const knex = Knex({
    client: 'mysql',
    connection: {
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database,
        charset: 'utf8'
    }
});

const bookshelf = Bookshelf(knex);

module.exports = {
    bookshelf
}