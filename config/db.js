const Bookshelf = require('bookshelf');
const Knex = require('knex');
const config = require('./');

const knex = Knex({
    client: 'mysql',
    connection: {
        host: config.mysql.connections.host,
        port: config.mysql.connections.port,
        user: config.mysql.connections.user,
        password: config.mysql.connections.password,
        database: config.mysql.connections.database,
        charset: 'utf8'
    }
});

const bookshelf = Bookshelf(knex);

module.exports = {
    bookshelf
}