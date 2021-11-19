import faker from 'faker';
import { IBaseUser, IUserSession } from '../@types/interfaces';

class User implements IBaseUser {
  constructor(userKey: string) {
    console.log('constructor worked!');
    this._key = userKey;
  }

  private readonly _key: string;

  private readonly _name: string = faker.name.findName();

  private readonly _age: number = faker.datatype.number({ min: 18, max: 54 });

  private _session!: IUserSession;

  public get key(): string {
    return this._key;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }

  public get session(): IUserSession {
    return this._session;
  }

  public set session(value: IUserSession) {
    this._session = value;
  }
}

export default User;
