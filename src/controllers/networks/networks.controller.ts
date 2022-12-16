import { NextFunction, Request, Response } from "express";
import { send } from "../../utils/sender";
import { getStats } from "./getStats";

const networksController = () => {};

networksController.getStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const stats = await getStats();
    send(res, stats);
  } catch (e) {
    next(e);
  }
};

export { networksController };
