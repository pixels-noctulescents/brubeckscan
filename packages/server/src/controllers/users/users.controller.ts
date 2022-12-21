import { Request, Response, NextFunction } from "express";
import { usersDAO } from "../../dao/users/users.dao";
import { sender } from "../../utils/sender";

const usersController = () => {};

usersController.count = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const count = await usersDAO.count();
    return sender.success(res, { users: { count } });
  } catch (e) {
    next(e);
  }
};

usersController.createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.createUser(req.body.address);
    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

usersController.findUserByAddress = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.findUserByAddress(req.params.address);

    if (!user) {
      return sender.failure(res, { user: "User not found." }, 404);
    }

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

usersController.deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.deleteUserByAddress(req.body.address);

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

export { usersController };
