import express from "express";
import { usersController } from "controllers/users.controller";

const usersRouter = express.Router();

usersRouter.get("/count", usersController.count);
usersRouter.get("/:address", usersController.getUser);

export { usersRouter };
