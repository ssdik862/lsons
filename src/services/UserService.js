import myCache from './CacheService';
class UserService {
    static async getUser(id) {
        if (!id) {
            throw new Error('ID not input');
        }
        const user = myCache.get(id);
        return user;
    }
}
export default UserService;
