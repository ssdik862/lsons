// import UserService from '../services/UserService.js';
const socket = (io) => {
    io.on('connection', (socket) => {
        console.log('New Connection');
    });
};
export default socket;
