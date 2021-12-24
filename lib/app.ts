import express from 'express';
import session from 'express-session';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
import UserController from './controllers/UserController';
import UserRouter from './routes/UserRoutes';

const app = express();
const sessionConfig = {
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false,
};
// app.use(session(sessionConfig));
const sessionMiddleware = session(sessionConfig);
app.use(sessionMiddleware);
app.use(UserRouter);

app.use((req, res) => {
  res.status(404).send('Error page: something wrong');
});

const httpServer = createServer(app);
const io = new Server(httpServer, {});
io.use((socket: Socket, next) => {
  const req = socket.request as express.Request;
  const res = req.res as express.Response;
  sessionMiddleware(socket.request as express.Request, res, next as express.NextFunction);
});
declare module 'express-session' {
  interface Session {
    key: string;
  }
}

// io.on('connection', (socket) => {
//   const soscetSession = socket.request.session;
//   soscetSession.connections += 1;
//   soscetSession.save();
// });

const port = process.env.PORT || 4000;
httpServer.listen(port, () => console.log(`server listening on port ${port}`));

io.on('connection', (socket) => {
  // You can set any values you want to session here.

  try {
    const req = socket.request as express.Request;
    console.log('req.session_socket_id', req.session.id);
    req.session.key = 'XXX';
    // There is no auto save for session.
    // socket.request.session.save();

    // You can also send data using socket.emit() although it is not very useful
    // socket.emit('any-key', 'values');
    socket.on('disconnect', () => {
      console.log('hello disconnect');
      UserController.destriyUserSessionById(express.request, express.response);
    });
  } catch (error) {
    console.log('eeeee', error);
  }
});
