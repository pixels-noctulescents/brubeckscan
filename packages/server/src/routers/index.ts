import express from "express";
import { validateAuth } from "../middlewares/validate/auth";
import NodeRouter from "./NodeRouter"
import NetworkRouter from "./NetworkRouter";
import UserRouter from "./UserRouter";
import FavoriteRouter from "./FavoriteRouter";
import MarketRouter from "./MarketRouter";

const Router = express.Router();

Router.use("/users", [validateAuth], UserRouter);
Router.use("/markets", [validateAuth], MarketRouter);
Router.use("/nodes", [validateAuth], NodeRouter);
Router.use("/networks", [validateAuth], NetworkRouter);
Router.use("/favorites", [validateAuth], FavoriteRouter);

export default Router;
