import { IBaseUser } from '../@types/interfaces';
import myCache from './CacheService';

class UserService {
  static async getUser(id: string): Promise<IBaseUser | undefined> {
    if (!id) {
      throw new Error('ID not input');
    }
    const user: IBaseUser | undefined = myCache.get(id);

    return user;
  }
}

export default UserService;
