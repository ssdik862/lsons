import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
// import UserService from '../services/UserService.js';

const socket = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  io.on('connection', (socket: Socket) => {
    console.log('New Connection');
  });
};

export default socket;
