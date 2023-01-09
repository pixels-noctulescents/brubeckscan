import express from "express";
import { validateEthAddress } from "../middlewares/validate/ethAddress";
import { usersController } from "../controllers/users/users.controller";

const usersRouter = express.Router();

// General stats
usersRouter.get("/count", usersController.count);

// User CRUD Operations
usersRouter.get("/:address", [validateEthAddress], usersController.find);
usersRouter.post("/:address", [validateEthAddress], usersController.create);
usersRouter.delete("/:address", [validateEthAddress], usersController.delete);
usersRouter.patch("/:address", [validateEthAddress], usersController.update);

// Overview
// Retrieve information for every favorites
usersRouter.get("/:address/overview", [validateEthAddress], usersController.getOverview);

export { usersRouter };
