import express from "express";
import { usersRouter } from "./users.router";
import { marketsRouter } from "./markets.router";
import { nodesRouter } from "./nodes.router";

const Router = express.Router();

Router.use("/users", usersRouter);
Router.use("/markets", marketsRouter);
Router.use("/nodes", nodesRouter);

export { Router };
