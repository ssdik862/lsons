import { IBaseUser } from '../@types/interfaces';
import db from '../db';
import myCache from './CacheService';

class UserService {
  static async getUser(id: string): Promise<IBaseUser | undefined> {
    if (!id) {
      throw new Error('ID not input');
    }
    const user: IBaseUser | undefined = myCache.get(id);

    return user;
  }

  static getCryptoPriceByName(cryptoName: string): number {
    console.log('db.data', db.data);

    let price: number = 0;
    if (db.data) {
      price = db.data[cryptoName];
    }

    return price;
  }
}

export default UserService;
