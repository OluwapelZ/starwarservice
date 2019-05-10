const config = {
    environment: process.env.NODE_ENV,
    webserver: {
        port: process.env.PORT || '80'
    },
    mysql: {
        connections: {
            host: process.env.DATABASE_HOST,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD
        },
    },
}

module.exports = config