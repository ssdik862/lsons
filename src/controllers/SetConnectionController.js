import { nanoid } from 'nanoid';
import User from '../classes/user';
import myCache from '../services/CacheService';
import UserService from '../services/UserService';
// Юзер устанавливает соединение с сервером и передает свой уникальный id.
// Сервер записывает эту сессию и id в локальный кэш.
class SetConnectionController {
    static async setConnection(req, res) {
        const reply = {
            userKey: '',
            views: 0,
            newUser: false,
            sessionId: '',
        };
        console.log('req.session.id', req?.session?.id);
        try {
            const userKey = req.session?.userKey ?? nanoid(3);
            console.log('userKey', userKey);
            req.session.views = req?.session?.views ? req.session.views += 1 : 1;
            let user = await UserService.getUser(userKey);
            console.log('userCacheData', user);
            if (!user) {
                user = new User(userKey);
                reply.newUser = true;
                console.log('user', user);
                req.session.userKey = userKey;
                req.session.crypto = {};
            }
            user.session = req.session;
            myCache.set(userKey, user, 1000);
            reply.userKey = user.session.userKey;
            reply.views = user.session.views;
            reply.sessionId = user.session.id;
        }
        catch (error) {
            console.error('eee', error);
            SetConnectionController.handleError(res, error);
        }
        return res.status(200).json(reply);
    }
    static handleError = (res, error) => res.status(500).send(error.message);
}
export default SetConnectionController;
