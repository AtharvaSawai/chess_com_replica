"use strict";
// Web Sockets in Node.js
//go to NPM ws on Google search and get the WebSocket Bootstrapped
// https://github.com/websockets/ws 
// Navigate to Simple Server Boiler Plate
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });
    ws.send('something');
});
// This much code should initialize a simple WebSocket Server
