import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import dotenv from 'dotenv';
import UserRouter from './routes/UserRoutes';
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
app.get('/', (req, res) => {
    res.send('hello!');
});
app.use((req, res) => {
    res.status(404).send('Error page: something wrong');
});
export default app;
