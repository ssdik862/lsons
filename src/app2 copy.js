import express from 'express';
import session from 'express-session';
import { createServer } from 'http';
import { Server } from 'socket.io';
import morgan from 'morgan';
import dotenv from 'dotenv';
import UserRouter from './routes/UserRoutes';
const server = createServer();
const io = new Server(server, {});
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false,
}));
app.use(UserRouter);
app.use((req, res) => {
    res.status(404).send('Error page: something wrong');
});
const sessionMiddleware = session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } });
// register middleware in Express
app.use(sessionMiddleware);
// register middleware in Socket.IO
io.use((socket, next) => {
    sessionMiddleware(socket.request, {}, next);
    // sessionMiddleware(socket.request, socket.request.res, next); will not work with websocket-only
    // connections, as 'socket.request.res' will be undefined in that case
});
io.on('connection', (socket) => {
    const { session } = socket.request;
    // session.connections++;
    session.save();
});
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`server listening on port ${port}`));
// export default app;
