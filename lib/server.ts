import express from 'express';
// import morgan from 'morgan';
import { LowSync, JSONFileSync } from 'lowdb';

const PORT = 4000;

const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);

const app = express();

// app.db = db;

app.use(express.json());
// app.use(morgan('dev'));

// app.use('/books', booksRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
