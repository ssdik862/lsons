/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { LowSync, JSONFileSync } from 'lowdb';

type Data = {
  [key : string]: number // Expect posts to be an array of strings
}
const adapter = new JSONFileSync<Data>('db.json');
const db = new LowSync<Data>(adapter);
db.data = { BTC: 61.858 };
db.write(); // file.json will be { posts: [] }

export default db;
