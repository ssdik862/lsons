import UserController from '../controllers/UserController';
// import UserService from '../services/UserService.js';
const socket = (io) => {
    //   io.on('connection', (socket: Socket) => {
    //     console.log('New Connection');
    //   });
    io.on('connection', (socket) => {
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
