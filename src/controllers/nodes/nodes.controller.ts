import { NextFunction, Request, Response } from "express";
import { send } from "../../utils/sender";
import { getNodeStats } from "./getNodeStats";
import { formatNodeStats } from "../../utils/format";

const nodesController = () => {};

nodesController.getNodeStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address;

    const data = await getNodeStats(address);

    const stats = formatNodeStats(data, address);

    send(res, stats);
  } catch (e) {
    next(e);
  }
};

export { nodesController };
