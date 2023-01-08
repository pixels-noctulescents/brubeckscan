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

usersController.create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.create(req.params.address);
    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

usersController.find = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.find(req.params.address);

    if (!user) {
      return sender.failure(res, { user: "User not found." }, 404);
    }

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

usersController.delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.delete(req.params.address);

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

usersController.update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await usersDAO.update(req.params.address, req.body);

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

export { usersController };
