import { Router } from 'express';
import SetConnectionController from '../controllers/SetConnectionController';
import UserController from '../controllers/UserController';

const UserRouter = Router();


UserRouter.get('/', SetConnectionController.setConnection);

UserRouter.get('/api/user/sendId/:id', UserController.sendUserId);
UserRouter.post('/api/user/sendId/:id', UserController.sendUserId);

export default UserRouter;
