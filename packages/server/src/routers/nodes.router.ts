import express from "express";
import NodeController from "../controllers/nodes/nodes.controller";
import { validateEthAddress } from "../middlewares/validate/ethAddress";

const nodesRouter = express.Router();

// Aggregate data from various sources
nodesRouter.get(
  "/stats/:address",
  [validateEthAddress],
  NodeController.getNodeStats
);

export { nodesRouter };
