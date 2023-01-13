import { NextFunction, Request, Response } from "express";
import { getNodeStats } from "./getNodeStats";
import { sender } from "../../utils/sender";
import validator from "validator";

const NodesController = () => { };

NodesController.getNodeStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address;

    if (!address || !validator.isEthereumAddress(req.params.address)) {
      return sender.failure(res, { address: "Invalid ethereum address" })
    }

    // Main method du manager
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
