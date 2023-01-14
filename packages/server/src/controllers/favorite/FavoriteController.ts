import { NextFunction, Request, Response } from "express";
import FavoriteDAO from "../../dao/favorite/FavoriteDAO";
import { sender } from "../../utils/sender";
import validator from "validator";

const FavoriteController = () => { };

FavoriteController.find = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const favoriteId = req.params.id;

    const favorite = await FavoriteDAO.find(favoriteId);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

FavoriteController.create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddress = req.body.userAddress;
    const favoriteAddress = req.body.favoriteAddress;
    const favoriteName = req.body.favoriteName;

    if (!userAddress || !favoriteAddress || !favoriteName) {
      return sender.failure(res, {}, 400);
    }

    if (!validator.isEthereumAddress(favoriteAddress)) {
      return sender.failure(res, { address: "invalid" }, 400);
    }

    const favorite = await FavoriteDAO.save(userAddress.toLowerCase(), favoriteAddress.toLowerCase().trim(), favoriteName);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

FavoriteController.delete = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id) {
      return sender.failure(res, { nodeId: "Missing node ID." }, 400);
    }

    const favoriteId = req.params.id;
    const favorite = await FavoriteDAO.delete(favoriteId);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

FavoriteController.update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params.id) {
      return sender.failure(res, { nodeId: "Missing node ID." }, 400);
    }

    const favorite = await FavoriteDAO.update(req.params.id, req.body);

    return sender.success(res, { favorite });
  } catch (e) {
    next(e);
  }
};

export default FavoriteController;
