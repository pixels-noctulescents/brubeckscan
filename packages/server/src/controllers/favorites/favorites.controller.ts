import { NextFunction, Request, Response } from "express";
import { favoritesDAO } from "../../dao/favorites/favorites.dao";
import { sender } from "../../utils/sender";

const favoritesController = () => { };

favoritesController.find = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const favoriteId = req.params.id;

    const favorite = await favoritesDAO.find(favoriteId);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

favoritesController.create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddress = req.body.userAddress;
    const favoriteAddress = req.body.favoriteAddress;
    const favoriteName = req.body.favoriteName;

    console.log(userAddress);

    if (!userAddress || !favoriteAddress || !favoriteName) {
      return sender.failure(res, {}, 400);
    }

    const favorite = await favoritesDAO.save(userAddress.toLowerCase(), favoriteAddress.toLowerCase().trim(), favoriteName);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

favoritesController.delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id) {
      return sender.failure(res, { nodeId: "Missing node ID." }, 400);
    }

    const favoriteId = req.params.id;
    const favorite = await favoritesDAO.delete(favoriteId);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

favoritesController.update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id) {
      return sender.failure(res, { nodeId: "Missing node ID." }, 400);
    }

    const favorite = await favoritesDAO.update(req.params.id, req.body);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

export { favoritesController };
