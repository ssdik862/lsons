import express from 'express';

class GeneralController {
  static handleError(res: express.Response, error: Error) {
    res.status(500).send(error.message);
  }
}

export default GeneralController;
