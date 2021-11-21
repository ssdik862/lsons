import express from 'express';
declare class GeneralController {
    static handleError(res: express.Response, error: Error): void;
}
export default GeneralController;
