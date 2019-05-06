const config = {
    environment: process.env.NODE_ENV,
    webserver: {
        port: process.env.PORT || '8000'
    },
    mysql: {
        host: `${process.env.DATABASE_HOST}` || '0.0.0.0',
        port: `${process.env.DATABASE_PORT}` || '3306',
        database: `${process.env.DATABASE_NAME}`,
        user: `${process.env.DATABASE_USERNAME}`,
        password: `${process.env.DATABASE_PASSWORD}`
    }
}

module.exports = {
    config
}