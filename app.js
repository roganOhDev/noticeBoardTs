"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const index_1 = require("./routes/index");
const users_1 = require("./routes/users");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
exports.app = express();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
exports.app.set('view engine', 'pug');
exports.app.use(logger('dev'));
exports.app.use(express.json());
exports.app.use(express.urlencoded({ extended: false }));
exports.app.use(cookieParser());
exports.app.use(express.static(path.join(__dirname, 'public')));
exports.app.use('/', index_1.indexRouter);
exports.app.use('/users', users_1.usersRouter);
// catch 404 and forward to error handler
exports.app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
exports.app.use(function (err, req, res, next) {
    const httpError = createError(500, err.message);
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(httpError.status || 500);
    res.render('error');
});
