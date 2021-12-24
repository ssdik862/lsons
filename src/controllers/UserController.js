import myCache from '../services/CacheService';
import CryptoService from '../services/CryptoService';
import UserService from '../services/UserService';
// Добавим обычный рест маршрут, чтобы можно было на сервер через post/get передать id юзера.
// Если полученный по ресту id уже есть
// то тогда цену битка передаем в сессию, которая совпадает с id юзера
// При разрыве соединения - удалять сессию
class UserController {
    static async sendUserId(req, res) {
        const { id } = req.params;
        let user;
        const reply = {
            success: false,
            info: `user with key ${id} was not found`,
            user,
        };
        try {
            user = await UserService.getUser(id);
            console.log('user', user);
            if (user) {
                user.session.crypto.BTC = CryptoService.getCryptoPriceByName({ cryptoSymbol: 'BTC', cryptoSymbolConvertTo: 'USD' });
                reply.success = true;
                reply.info = `user with key ${id} was found`;
                reply.user = user;
            }
        }
        catch (error) {
            UserController.handleError(res, error);
        }
        return res.status(200).json(reply);
    }
    static async destriyUserSessionById(req, res) {
        const { id } = req.params;
        const sessionId = req.session.id;
        console.log('sessionId', sessionId);
        myCache.del(id);
        req.session.destroy((err) => {
            if (err) {
                return res.status(400).json(err);
            }
            return res.status(200).send(`session with id ${sessionId} destroy success`);
        });
    }
    static handleError = (res, error) => res.status(500).send(error.message);
}
export default UserController;
