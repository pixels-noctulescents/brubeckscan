import express from "express";
import NodeController from "../controllers/node/NodeController";
import { validateEthAddress } from "../middlewares/validate/ethAddress";

const NodeRouter = express.Router();

// Aggregate data from various sources
NodeRouter.get(
  "/stats/:address",
  [validateEthAddress],
  NodeController.getNodeStats
);

export default NodeRouter;
