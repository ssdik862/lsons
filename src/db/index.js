import fetch from 'node-fetch';
import { LowSync, JSONFileSync } from 'lowdb';
const adapter = new JSONFileSync('db.json');
const db = new LowSync(adapter);
// delete when net worked
let usdPrice = 55555.33;
let eurPrice = 50000.22;
// delete when net worked
const cryptoSymbol = 'BTC';
const cryptoSymbolConvertTo = 'USD,EUR';
const url = `https://min-api.cryptocompare.com/data/price?fsym=${cryptoSymbol}&tsyms=${cryptoSymbolConvertTo}`;
setInterval(async () => {
    let data;
    try {
        const response = await fetch(url);
        data = await response.json();
    }
    catch (error) {
        console.error('eee', error.code);
        data = {
            USD: usdPrice,
            EUR: eurPrice,
        };
    }
    usdPrice += 1;
    eurPrice += 1;
    db.data = db.data ?? {
        BTC: {
            USD: usdPrice,
            EUR: eurPrice,
        },
    };
    if (data) {
        db.data[cryptoSymbol] = data;
        db.write();
    }
    console.log('data', data);
}, 5000);
export default db;
