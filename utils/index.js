const dateToUTC = () => {
    return new Date(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    );
}

const getPublicIp = (req) => {
    return ((req.headers && req.headers['x-forwarded-for'])
    || req.ip 
    || req._remoteAddress 
    || (req.connection && req.connection.remoteAddress));
}

module.exports = {
    dateToUTC,
    getPublicIp
}