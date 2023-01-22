import { NextFunction, Request, Response } from "express";
import { sender } from "../../utils/sender";
import NetworkManager from "../../managers/NetworkManager";

const NetworkController = () => { };

NetworkController.getStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const stats = await NetworkManager.getNetworkStats();

    if (stats) {
      return sender.success(res, { stats });
    } else {
      return sender.failure(res, {});
    }
  } catch (e) {
    next(e);
  }
};

NetworkController.getTVLHistory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const history = await NetworkManager.getTVLHistory();

    if (history) {
      return sender.success(res, { history });
    } else {
      return sender.failure(res, {});
    }
  } catch (e) {
    next(e);
  }
}

export default NetworkController;
