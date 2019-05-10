const sendSuccess = (res, message, data) => {
    let resp = {
        status: 'success',
        message: (message) ? message : '',
        data: (data) ? data : null
    };

    statusCode = 200;
    
    return res.status(statusCode).json(resp);
}

const sendError = (res, message, status) => {
    let resp = {
        status: 'fail',
        message: (message) ? message : ''
    };

    statusCode = status ? status : 500;

    return res.status(statusCode).json(resp);
}

module.exports = {
    sendSuccess,
    sendError
}