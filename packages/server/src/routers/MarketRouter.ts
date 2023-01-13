import express from "express";
import MarketController from "../controllers/market/MarketController";

const MarketRouter = express.Router();

MarketRouter.get("/prices", MarketController.getPrices);

export default MarketRouter;
