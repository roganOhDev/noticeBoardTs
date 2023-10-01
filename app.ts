import {NextFunction, Request, Response} from 'express';
import {indexRouter} from './routes/index';
import {usersRouter} from './routes/users';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

export const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// error handler
app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
    const httpError = createError(500, err.message);

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(httpError.status || 500);
    res.render('error');
});
