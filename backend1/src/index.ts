
// Web Sockets in Node.js
//go to NPM ws on Google search and get the WebSocket Bootstrapped
// https://github.com/websockets/ws 
// Navigate to Simple Server Boiler Plate


import { WebSocket, WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();


wss.on('connection', function connection(ws) {

  gameManager.addUser(WebSocket)

  ws.on("disconnect", () => gameManager. removeUser(WebSocket))
});


// This much code should initialize a simple WebSocket Server
//build this and run it by executing 1) tsc -b
//2) node dist/index.ts
// check it on postWoman(hoppscotch) by entering the url as -->  ws://localhost:8080
