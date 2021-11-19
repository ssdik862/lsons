import express from 'express';
import { IBaseUser } from '../@types/interfaces';
import UserService from '../services/UserService';

// Добавим обычный рест маршрут, чтобы можно было на сервер через post/get передать id юзера.
// Если полученный по ресту id уже есть
// то тогда цену битка передаем в сессию, которая совпадает с id юзера
// При разрыве соединения - удалять сессию

class UserController {
  static async sendUserId(req: express.Request, res: express.Response) {
    let user: IBaseUser | undefined;
    try {
      const { id } = req.params;
      user = await UserService.getUser(id);
      console.log('user', user);
      if (user) {
        console.log('UserService.getCr_BTC)', UserService.getCryptoPriceByName('BTC'));
        user.session.crypto.BTC = UserService.getCryptoPriceByName('BTC');
      }
    } catch (error) {
      UserController.handleError(res, error);
    }

    return res.status(200).json(user);
  }

  static handleError = (res: express.Response, error: any) => res.status(500).send(error.message);
}

export default UserController;
