import express from 'express';
declare class UserController {
    static sendUserId(req: express.Request, res: express.Response): Promise<express.Response<any, Record<string, any>>>;
    static destriyUserSessionById(req: express.Request, res: express.Response): Promise<void>;
    static handleError: (res: express.Response, error: any) => express.Response<any, Record<string, any>>;
}
export default UserController;
