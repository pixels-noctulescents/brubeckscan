import express from "express";
import NetworkController from "../controllers/network/NetworkController";

const NetworkRouter = express.Router();

NetworkRouter.get("/stats", NetworkController.getStats);
NetworkRouter.get("/tvlhistory", NetworkController.getTVLHistory);

export default NetworkRouter;
