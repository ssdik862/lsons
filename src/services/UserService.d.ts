import { IBaseUser } from '../@types/interfaces';
declare class UserService {
    static getUser(id: string): Promise<IBaseUser | undefined>;
}
export default UserService;
