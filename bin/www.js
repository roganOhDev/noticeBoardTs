#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const app_1 = require("../app");
/**
 * Module dependencies.
 */
const debug = require('debug')('noticeboardts:server');
const http = require('http');
/**
 * Get port from environment and store in Express.
 */
exports.port = normalizePort(process.env.PORT || '3000');
app_1.app.set('port', exports.port);
/**
 * Create HTTP server.
 */
const server = http.createServer(app_1.app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(exports.port);
server.on('error', onError);
server.on('listening', onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof exports.port === 'string'
        ? 'Pipe ' + exports.port
        : 'Port ' + exports.port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
