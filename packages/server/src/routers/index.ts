import express from "express";
import { validateAuth } from "../middlewares/validate/auth";
import { usersRouter } from "./users.router";
import { marketsRouter } from "./markets.router";
import { nodesRouter } from "./nodes.router";
import { networksRouter } from "./networks.router";
import { favoritesRouter } from "./favorites.router";

const Router = express.Router();

Router.use(validateAuth);

Router.use("/users", usersRouter);
Router.use("/markets", marketsRouter);
Router.use("/nodes", nodesRouter);
Router.use("/networks", networksRouter);
Router.use("/favorites", favoritesRouter);

export { Router };
