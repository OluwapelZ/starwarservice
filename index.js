const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const ResponseMessages = require('./constants/ResponseMessages').default;
const logger = require('morgan');
const HealthRoutes = require('./routes/health');
const app = express();

const { config } = require('./config');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Configure dotenv
require('dotenv').config();

//Parse data to json
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));

/**
 * App routes
 */
app.use('/', HealthRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({
        status: false,
        message: ResponseMessages.METHOD_NOT_IMPLEMENTED
    });
  });

app.listen(config.webserver.port, () => {
  console.log('starwarservice is listening on port: ', config.webserver.port);
});