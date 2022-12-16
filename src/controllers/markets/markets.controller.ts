import { getPrices } from "./getPrices";
import { sender } from "../../utils/sender";
import { Response, NextFunction, Request } from "express";

const marketsController = () => {};

marketsController.getPrices = async (
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

export { marketsController };
