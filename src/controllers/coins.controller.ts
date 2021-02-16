import { NextFunction, Request, Response } from 'express';
import CoinsService from '../services/coins.service';

class CoinsController {
  public getCoins = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // TODO: use res.query.??? to get url query params, ??? is name of the query param
    try {
      // TODO: add service call
      const total = req.query.total as string
      const service = new CoinsService();
      const coins = await service.getCoins(total);
      res.status(200).json(coins);
    } catch (error) {
      next(error);
    }
  };
}

export default CoinsController;
