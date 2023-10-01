"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const express_1 = require("express");
exports.indexRouter = (0, express_1.Router)();
exports.indexRouter.get('/', (req, res) => {
    const title = "Hello Index!";
    res.render('index', { title });
});
