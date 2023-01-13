import { getPrices } from "./getPrices";
import { sender } from "../../utils/sender";
import { Response, NextFunction, Request } from "express";

const MarketController = () => { };

MarketController.getPrices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getPrices();

    sender.success(res, { prices: data });
  } catch (e) {
    next(e);
  }
};

export default MarketController;
