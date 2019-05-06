const customError = require('custom-error-generator');

const NotFoundError = customError('NotFoundError', { code: 'NOT_FOUND_ERROR' });
const InternalServerError = customError('InternalServerError', { code: 'INTERNAL_SERVER_ERROR' });

module.exports = {
    NotFoundError,
    InternalServerError
}