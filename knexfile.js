let config = require('./config')

let dbConfig = {
    client: 'mysql',
    connection: {
        host: config.mysql.connections.host,
        port: config.mysql.connections.port,
        user: config.mysql.connections.user,
        password: config.mysql.connections.password,
        database: config.mysql.connections.database
    },
    migrations: {
        tableName: 'knex_migrations'
    }
}

module.exports = {
    development: dbConfig
};