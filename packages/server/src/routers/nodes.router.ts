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

nodesRouter.delete("/", [], nodesController.unwatchNode);

nodesRouter.patch("/", [], nodesController.updateNode);

export { nodesRouter };
