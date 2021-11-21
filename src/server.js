// packages
import http from 'http';
// modules
import { Server } from 'socket.io';
import app from './app';
// socket
import socket from './helpers/socket';
const server = http.createServer(app);
const io = new Server(server);
server.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});
socket(io);
