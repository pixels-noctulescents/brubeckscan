import express from "express";
import { validateAuth } from "../middlewares/validate/auth";
import { usersRouter } from "./users.router";
import { marketsRouter } from "./markets.router";
import { nodesRouter } from "./nodes.router";
import { favoritesRouter } from "./favorites.router";
import NetworkRouter from "./NetworkRouter";

const Router = express.Router();

Router.use(validateAuth);

Router.use("/users", usersRouter);
Router.use("/markets", marketsRouter);
Router.use("/nodes", nodesRouter);
Router.use("/networks", NetworkRouter);
Router.use("/favorites", favoritesRouter);

export { Router };
