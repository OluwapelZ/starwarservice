let config = require('./config/index')

let dbConfig = {
    client: 'mysql',
    connection: config.mysql,
    migrations: {
        tableName: 'knex_migrations'
    }
}

module.exports = {
    development: dbConfig
};