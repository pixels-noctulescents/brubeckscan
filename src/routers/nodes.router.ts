import express from "express";
import { nodesController } from "../controllers/nodes/nodes.controller";

const nodesRouter = express.Router();

nodesRouter.get("/staked/:address", nodesController.getDataStaked);
nodesRouter.get("/rewards/:address", nodesController.getRewardsSent);

export { nodesRouter };
