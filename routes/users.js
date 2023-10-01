"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
