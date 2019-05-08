let config = require('./config')

let dbConfig = {
    client: 'mysql',
    connection: config.mysql.connections,
    pool: config.mysql.pool,
    migrations: {
        tableName: 'knex_migrations'
    }
}

module.exports = {
    development: dbConfig
};