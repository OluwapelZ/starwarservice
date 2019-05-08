const dbConfig = {
    client: 'mysql',
    connection: {
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        password: config.mysql.password,
        database: config.mysql.database,
        charset: 'utf8'
    },
    seeds: {
        directory: './seeds'
    }
}

module.exports = {
    dbConfig
}