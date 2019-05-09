const ResponseCodes = {
    "E001": 'Sorry, this is not a valid route',
    "E002": 'Resource not found',
    "E003": 'An error occured internally'
};

const ResponseMessages = {
    "METHOD_NOT_IMPLEMENTED": "E001",
    "NOT_FOUND_ERROR": "E002",
    "INTERNAL_SERVER_ERROR": "E003"
}

const getMapping = (message) => {
    if(ResponseMessages.message) {
        const code = ResponseMessages.message;
        return ResponseCodes.code;
    }
}

module.exports = getMapping;