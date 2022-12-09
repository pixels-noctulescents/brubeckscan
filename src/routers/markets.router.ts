import express from "express";
import { marketsController } from "controllers/markets/markets.controller";

const marketsRouter = express.Router();

marketsRouter.get("/prices", marketsController.getPrices);

export { marketsRouter };
