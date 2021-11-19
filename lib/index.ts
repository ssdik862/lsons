import fetch from 'node-fetch';
import { join, dirname } from 'path';
import { Low, JSONFile } from 'lowdb';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);
console.log('dirnme', __dirname);

// Use JSON file for storage
const file = join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const db = new Low(adapter);
await db.read();

const url = 'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD';
const response = await fetch(url);
const data = await response.json();
console.log(data);
console.log('233sdf');
