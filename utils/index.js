class Utils {
    dateToUTC () {
        const date = new Date();
        const utcDate = date.getUTCDate();
        return utcDate;
    }
    
    getPublicIp (req) {
        return ((req.headers && req.headers['x-forwarded-for'])
        || req.ip 
        || req._remoteAddress 
        || (req.connection && req.connection.remoteAddress));
    }
}

module.exports = new Utils();