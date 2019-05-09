const getMapping = require('./ResponseMessages');

const customError = require('custom-error-generator');

const NotFoundError = customError('NotFoundError', { code:  getMapping('NOT_FOUND_ERROR')});
const InternalServerError = customError('InternalServerError', { code: getMapping('INTERNAL_SERVER_ERROR') });

module.exports = {
    NotFoundError,
    InternalServerError
}