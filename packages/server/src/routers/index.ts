import express from "express";
import { validateAuth } from "../middlewares/validate/auth";
import NodeRouter from "./NodeRouter"
import NetworkRouter from "./NetworkRouter";
import UserRouter from "./UserRouter";
import FavoriteRouter from "./FavoriteRouter";
import MarketRouter from "./MarketRouter";
import AppRouter from "./AppRouter";

const Router = express.Router();

Router.use("/users", [validateAuth], UserRouter);
Router.use("/markets", [validateAuth], MarketRouter);
Router.use("/nodes", [validateAuth], NodeRouter);
Router.use("/networks", [validateAuth], NetworkRouter);
Router.use("/favorites", [validateAuth], FavoriteRouter);
Router.use("/app", [validateAuth], AppRouter)

export default Router;
