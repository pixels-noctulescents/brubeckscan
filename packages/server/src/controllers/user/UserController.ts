import { Request, Response, NextFunction } from "express";
import UserDAO from "../../dao/user/UserDAO";
import UserManager from "../../managers/UserManager";
import { sender } from "../../utils/sender";

const UserController = () => { };

UserController.count = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const count = await UserDAO.count();
    return sender.success(res, { users: { count } });
  } catch (e) {
    next(e);
  }
};

UserController.create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDAO.create(req.params.address);
    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

UserController.find = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDAO.find(req.params.address);

    if (!user) {
      return sender.failure(res, { user: "User not found." }, 404);
    }

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

UserController.delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDAO.delete(req.params.address);

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

UserController.update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserDAO.update(req.params.address, req.body);

    return sender.success(res, { user });
  } catch (e) {
    next(e);
  }
};

UserController.getOverview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddress = req.params.address;

    const exist = await UserDAO.find(userAddress.toLowerCase());

    if (!exist) {
      return sender.failure(res, { user: "Not found" }, 404);
    }

    if (exist) {
      const overview = await UserManager.getOverview(exist.Favorite);
      return sender.success(res, { overview });
    }
  } catch (e) {
    next(e);
  }
};

export default UserController;
