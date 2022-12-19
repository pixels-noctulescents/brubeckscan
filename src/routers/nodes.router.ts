import express from "express";
import { nodesController } from "../controllers/nodes/nodes.controller";
import { validateEthAddress } from "../middlewares/validate/ethAddress";

const nodesRouter = express.Router();

nodesRouter.get(
  "/stats/:address",
  [validateEthAddress],
  nodesController.getNodeStats
);

nodesRouter.post("/:address", [validateEthAddress], nodesController.watchNode);

nodesRouter.delete(
  "/:address",
  [validateEthAddress],
  nodesController.unwatchNode
);

nodesRouter.patch(
  "/:address",
  [validateEthAddress],
  nodesController.updateNode
);

export { nodesRouter };
