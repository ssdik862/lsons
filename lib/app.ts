// import fetch from 'node-fetch';
import express from 'express';
import session from 'express-session';

import UserRouter from './routes/UserRoutes';
// import myCache from './services/CacheService';
// import db from './db';
// import { Session } from './@types/interfaces';
// import { Session } from './@types/express-session';

// declare module 'express-session' {
//   interface Session {
//     views: number;
//   }
// }

// export interface Session {
//   views: number;
// }

const PORT = 4000;

const app = express();
app.use(express.json());
app.use(session({
  secret: 'secret_key',
  resave: false,
  saveUninitialized: false,
}));
app.use(UserRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

// console.log('b.dat1', db.data);
// db.read();
// console.log('b.dat2', db.data);

// const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
// const response = await fetch(url);
// const data = await response.json();

// const arrData: any = [];
// arrData.push(data);
// console.log('data', arrData);

// // Юзер устанавливает соединение с сервером и передает свой уникальный id.
// // (можно взять любой, 1, 2, 3… хеш, имя, не важно)
// // Сервер записывает эту сессию и id в локальный кэш.
// const userId = nanoid(4);

// // const getUserDataFromCache = (): BaseUser => myCache.get(userId);
// const userCacheData: BaseUser | undefined = myCache.get(userId);
// console.log('userCacheData', userCacheData);

// const user = userCacheData || new User(userId);
// console.log('uesr', user);

// const generalTtl = 1000;
// // const router = express.Router();

// app.get('/', async (req, res) => {
//   console.log('req.session', JSON.stringify(req.session));
//   console.log('req.session.user', req.session.views);
//   const reply = await (await fetch(url)).json();

//   const r2 = db.read();
//   console.log('r2', r2);

//   req.session.views = req.session.views ? req.session.views += 1 : 1;
//   user!.session = req.session;

//   myCache.set(userId, user, generalTtl);
//   const mykeys = myCache.keys();
//   console.log('mykeys', mykeys);
//   const value = myCache.mget([...mykeys]);
//   console.log('value', value);

//   arrData.push(reply);
//   res.json({ ...{ views: req.session.views }, ...arrData });
// });
