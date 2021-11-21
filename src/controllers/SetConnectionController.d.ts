import express from 'express';
import { IUserCrypto } from '../@types/interfaces';
declare module 'express-session' {
    interface Session {
        views: number;
        userKey: string;
        crypto: IUserCrypto;
    }
}
declare class SetConnectionController {
    static setConnection(req: express.Request, res: express.Response): Promise<express.Response<any, Record<string, any>>>;
    static handleError: (res: express.Response, error: any) => express.Response<any, Record<string, any>>;
}
export default SetConnectionController;
