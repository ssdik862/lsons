import { Server, Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import UserController from '../controllers/UserController';
// import UserService from '../services/UserService.js';

const socket = (io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
//   io.on('connection', (socket: Socket) => {
//     console.log('New Connection');
//   });

  io.on('connection', (socket: Socket) => {
    console.log('New Connection');
    io.emit('index', { 0: 1 });
    socket.on('disconnect', (reason) => {
    //   console.log('sess', socket.request.session);

      console.log('socket disconnect', socket.rooms, reason);
      UserController.destriyUserSessionById;
    });
    //     // setTimeout(() => socket.disconnect(true), 5000);
  });
};

export default socket;
