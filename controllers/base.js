const Constants = require('../constants/constants');
const ResponseMessages = require('../constants/ResponseMessages');

const sendSuccess = (res, data) => {
    let resp = {status: 'success'};

    if (data || data === [] || data === {})
        resp.data = data;

    statusCode = 200;
    
    return res.status(statusCode).json(resp);
}

const sendError = (res, status) => {
    let resp = {status: 'fail'};

    statusCode = status ? status : 500;

    return res.status(statusCode).json(resp);
}

module.exports = {
    sendSuccess,
    sendError
}