import express from "express";
import { networksController } from "../controllers/networks/networks.controller";

const networksRouter = express.Router();

networksRouter.get("/stats", networksController.getStats);

export { networksRouter };
