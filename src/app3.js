import express from 'express';
import session from 'express-session';
import { createServer } from 'http';
import { Server } from 'socket.io';
const httpServer = createServer();
const io = new Server(httpServer, {});
const app = express();
const sessionMiddleware = session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } });
// register middleware in Express
app.use(sessionMiddleware);
// register middleware in Socket.IO
io.use((socket, next) => {
    const req = socket.request;
    const res = req.res;
    sessionMiddleware(socket.request, res, next);
    // sessionMiddleware(socket.request, socket.request.res, next); will not work with websocket-only
    // connections, as 'socket.request.res' will be undefined in that case
});
// io.on('connection', (socket) => {
//   const soscetSession = socket.request.session;
//   soscetSession.connections += 1;
//   soscetSession.save();
// });
const port = process.env.PORT || 3000;
httpServer.listen(port, () => console.log(`server listening on port ${port}`));
// const sessionMiddleware = session({
//   secret: 'Tecky Academy teaches typescript',
//   resave:true,
//   saveUninitialized:true,
//   cookie:{secure:false}
// });
// app.use(sessionMiddleware);
// io.use((socket,next)=>{
//   let req = socket.request as express.Request
//   let res = req.res as express.Response
//   sessionMiddleware(req, res, next as express.NextFunction
// }, );
// //...
// io.on('connection', function (socket) {
//   // You can set any values you want to session here.
//   const req = socket.request as express.Request;
//   req.session['key'] = 'XXX';
//   // There is no auto save for session.
//   socket.request.session.save();
//   // You can also send data using socket.emit() although it is not very useful
//   socket.emit('any-key','values');
//   socket.on("disconnect",()=>{
//       //... rest of the code
//   })
// });
