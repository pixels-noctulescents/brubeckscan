import express from "express";
import { validateEthAddress } from "../middlewares/validate/ethAddress";
import UserController from "../controllers/user/UserController";

const UserRouter = express.Router();

// General stats
UserRouter.get("/count", UserController.count);

// User CRUD Operations
UserRouter.get("/:address", [validateEthAddress], UserController.find);
UserRouter.post("/:address", [validateEthAddress], UserController.create);
UserRouter.delete("/:address", [validateEthAddress], UserController.delete);
UserRouter.patch("/:address", [validateEthAddress], UserController.update);

// Overview
// Retrieve information for every favorites
UserRouter.get("/:address/overview", [validateEthAddress], UserController.getOverview);

export default UserRouter;
