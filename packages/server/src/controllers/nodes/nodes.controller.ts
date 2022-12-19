import { NextFunction, Request, Response } from "express";
import { nodesDAO } from "../../dao/nodes/nodes.dao";
import { sender } from "../../utils/sender";
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

    return sender.success(res, { node: stats });
  } catch (e) {
    next(e);
  }
};

nodesController.watchNode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.address) {
      return sender.failure(res, { userAddress: "Missing user address." }, 400);
    }
    if (!req.body.address) {
      return sender.failure(res, { nodeAddress: "Missing node address." }, 400);
    }

    const userAddress = req.params.address;
    const nodeAddress = req.body.address;

    const node = await nodesDAO.watchNode(userAddress, nodeAddress);

    return sender.success(res, { node });
  } catch (e) {
    next(e);
  }
};

nodesController.unwatchNode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.nodeId) {
      return sender.failure(res, { nodeId: "Missing node ID." }, 400);
    }

    const nodeId = req.body.nodeId;

    const node = await nodesDAO.unwatchNode(nodeId);

    return sender.success(res, { node });
  } catch (e) {
    next(e);
  }
};

nodesController.updateNode = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.nodeId) {
      return sender.failure(res, { nodeId: "Missing node ID." }, 400);
    }
    if (!req.body.nodeName) {
      return sender.failure(res, { nodeName: "Missing node name." }, 400);
    }

    const nodeId = req.body.nodeId;
    const nodeName = req.body.nodeName;

    const node = await nodesDAO.updateNode(nodeId, nodeName);

    return sender.success(res, { node });
  } catch (e) {
    next(e);
  }
};

export { nodesController };
