"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = require("express");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get('/', function (req, res, next) {
    const user = "Rogan";
    res.render('users', { user });
});
