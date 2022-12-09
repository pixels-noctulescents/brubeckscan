import { Request, Response, NextFunction } from "express";
import { constants } from "configs/constants";
import { send } from "utils/sender";

export async function getPrices(req: Request, res: Response, next: NextFunction) {
    try {
        const requests = constants.PAIRS.map(async (symbol) => {
          const request = await fetch(`${constants.BINANCE_PRICE_TICKER_URL}${symbol}`);
          return request;
        });
    
        const responses = await Promise.all(requests);
    
        const data = await Promise.all(responses.map((res) => res.json()));
    
        let prices: any = {};
    
        data.forEach((price) => {
          prices[price.symbol] = +price.price;
        });
    
        send(res, prices);
      } catch (e) {
        next(e);
      }
}