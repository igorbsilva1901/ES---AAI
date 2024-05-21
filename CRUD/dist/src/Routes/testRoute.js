"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testRoute = (0, express_1.Router)();
testRoute.get('/helloworld', (req, res) => {
    res.status(200).end('<h1>Hello World!</h1>');
});
exports.default = testRoute;
