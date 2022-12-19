import express from "express";
import { nodesController } from "../controllers/nodes/nodes.controller";
import { validateEthAddress } from "../middlewares/validate/ethAddress";

const nodesRouter = express.Router();

nodesRouter.get(
  "/stats/:address",
  [validateEthAddress],
  nodesController.getNodeStats
);

export { nodesRouter };
