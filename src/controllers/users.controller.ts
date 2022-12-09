import { prisma } from "../clients/prisma";
import { Request, Response, NextFunction } from "express";

const usersController = () => {};

usersController.count = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const count = await prisma.user.count();
    res.json({ count });
  } catch (e) {
    next(e);
  }
};

usersController.getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await prisma.user.findFirst({
      where: { address: req.params.address },
      include: { Profile: true, Node: true },
    });
    res.json(user);
  } catch (e) {
    next(e);
  }
};

export { usersController };
