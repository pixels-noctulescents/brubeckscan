import { NextFunction, Request, Response } from "express";
import { sender } from "../../utils/sender";
import validator from "validator";
import NodeManager from "../../managers/Node/NodeManager";
import NetworkManager from "../../managers/NetworkManager";

const NodesController = () => {};

NodesController.getNodeStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const address = req.params.address;

    if (!address || !validator.isEthereumAddress(req.params.address)) {
      return sender.failure(res, { address: "Invalid ethereum address" });
    }

    // We need the Brubeck network stats to process a node status
    const networkStats = await NetworkManager.getNetworkStats();

    if (networkStats) {
      const cleanInputAddress = address.trim().toLowerCase();
      const manager = new NodeManager(cleanInputAddress, networkStats);
      const node = await manager.getStats();
      if (node) {
        return sender.success(res, { node });
      } else {
        return sender.failure(res, { message: "Fail" });
      }
    }

    return sender.failure(res, { message: "Fail" });
  } catch (e) {
    next(e);
  }
};

export default NodesController;
