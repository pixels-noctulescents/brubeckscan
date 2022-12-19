import express from "express";
import { validateAuth } from "../middlewares/validate/auth";
import { validateUserCreationInput } from "../middlewares/validate/userCreationInput";
import { usersController } from "../controllers/users/users.controller";

const usersRouter = express.Router();

usersRouter.use(validateAuth);

usersRouter.get("/count", usersController.count);

usersRouter.post("", [validateUserCreationInput], usersController.createUser);

usersRouter.get(
  "",
  [validateUserCreationInput],
  usersController.findUserByAddress
);

usersRouter.delete("", [validateUserCreationInput], usersController.deleteUser);

export { usersRouter };
