import express from "express";
import { nodesController } from "../controllers/nodes/nodes.controller";
import { validateEthAddress } from "../middlewares/address";

const nodesRouter = express.Router();

nodesRouter.get("/staked/:address", [validateEthAddress], nodesController.getDataStaked);
nodesRouter.get("/rewards/:address", [validateEthAddress], nodesController.getRewardsSent);

export { nodesRouter };
