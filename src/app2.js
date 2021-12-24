import express from 'express';
import session from 'express-session';
import { createServer } from 'http';
import UserRouter from './routes/UserRoutes';
const app = express();
// app.use(session({
//   secret: 'secret_key',
//   resave: false,
//   saveUninitialized: false,
// }));
const sessionConfig = {
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false,
};
app.use(UserRouter);
const sessionMiddleware = session(sessionConfig);
app.use(sessionMiddleware);
app.use((req, res) => {
    res.status(404).send('Error page: something wrong');
});
const httpServer = createServer(app);
// const io = new Server(httpServer, {});
// io.use((socket: Socket, next) => {
//   const req = socket.request as express.Request;
//   const res = req.res as express.Response;
//   sessionMiddleware(socket.request as express.Request, res, next as express.NextFunction);
// });
// declare module 'express-session' {
//   interface Session {
//     key: string;
//   }
// }
// // io.on('connection', (socket) => {
// //   const soscetSession = socket.request.session;
// //   soscetSession.connections += 1;
// //   soscetSession.save();
// // });
const port = process.env.PORT || 4000;
httpServer.listen(port, () => console.log(`server listening on port ${port}`));
// io.on('connection', (socket) => {
//   // You can set any values you want to session here.
//   const req = socket.request as express.Request;
//   console.log('req', req);
//   req.session.key = 'XXX';
//   // There is no auto save for session.
//   // socket.request.session.save();
//   // You can also send data using socket.emit() although it is not very useful
//   socket.emit('any-key', 'values');
//   socket.on('disconnect', () => {
//     // ... rest of the code
//   });
// });
