import { NextFunction, Request, Response } from "express";
import { getNodeStats } from "./getNodeStats";
import { sender } from "../../utils/sender";

const NodesController = () => { };

NodesController.getNodeStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address;

    const node = await getNodeStats(address);
    if (node) {
      return sender.success(res, { node: node });
    }

    return sender.failure(res, { message: "Could not get node" });

  } catch (e) {
    next(e);
  }
};

export default NodesController;
