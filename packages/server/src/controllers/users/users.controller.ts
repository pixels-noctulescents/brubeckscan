import { Request, Response, NextFunction } from "express";
import UsersDAO from "../../dao/users/users.dao";
import { sender } from "../../utils/sender";
import { buildOverview } from "./buildOverview";

const usersController = () => { };

usersController.count = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const count = await UsersDAO.count();
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
    const user = await UsersDAO.create(req.params.address);
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
    const user = await UsersDAO.find(req.params.address);

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
    const user = await UsersDAO.delete(req.params.address);

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
    const user = await UsersDAO.update(req.params.address, req.body);

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

usersController.getOverview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddress = req.params.address;

    const exist = await UsersDAO.find(userAddress);

    if (!exist) {
      return sender.failure(res, { user: "Not found" }, 404);
    }

    if (exist) {
      const overview = await buildOverview(exist.Favorite);
      if (overview) {
        return sender.success(res, { overview });
      }
    }
  } catch (e) {
    next(e);
  }
};


export { usersController };
