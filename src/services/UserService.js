import db from '../db';
import myCache from './CacheService';
class UserService {
    static async getUser(id) {
        if (!id) {
            throw new Error('ID not input');
        }
        const user = myCache.get(id);
        return user;
    }
    static getCryptoPriceByName({ cryptoSymbol, cryptoSymbolConvertTo, }) {
        console.log('db.data', db.data);
        let price = 0;
        if (db.data) {
            price = db.data[cryptoSymbol][cryptoSymbolConvertTo];
        }
        return price;
    }
}
export default UserService;
