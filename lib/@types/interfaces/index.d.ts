export interface IUserCrypto {
  [key: string] : number
}

export interface IUserSession {
  views: number;
  userKey: string;
  id: string;
  crypto: IUserCrypto
}

export interface IBaseUser {
  key: string;
  name: string;
  age: number;
  session: IUserSession;
}
