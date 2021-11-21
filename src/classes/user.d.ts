import { IBaseUser, IUserSession } from '../@types/interfaces';
declare class User implements IBaseUser {
    constructor(userKey: string);
    private readonly _key;
    private readonly _name;
    private readonly _age;
    private _session;
    get key(): string;
    get name(): string;
    get age(): number;
    get session(): IUserSession;
    set session(value: IUserSession);
}
export default User;
