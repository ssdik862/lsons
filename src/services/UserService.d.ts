import { IBaseUser } from '../@types/interfaces';
declare class UserService {
    static getUser(id: string): Promise<IBaseUser | undefined>;
    static getCryptoPriceByName({ cryptoSymbol, cryptoSymbolConvertTo, }: {
        cryptoSymbol: string;
        cryptoSymbolConvertTo: string;
    }): number;
}
export default UserService;
