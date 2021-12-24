import db from '../db';
class CryptoService {
    static getCryptoPriceByName({ cryptoSymbol, cryptoSymbolConvertTo, }) {
        console.log('db.data', db.data);
        let price = 0;
        if (db.data) {
            price = db.data[cryptoSymbol][cryptoSymbolConvertTo];
        }
        return price;
    }
}
export default CryptoService;
