import { NextFunction, Request, Response } from "express";
import { sender } from "../utils/sender";

const UNAUTHORIZED_MESSAGE = "Unauthorized.";

export function validateAuth(req: Request, res: Response, next: NextFunction) {
  const clientToken = req.headers.authorization?.replace("Bearer ", "");
  const serverToken = process.env.AUTH_HEADER;

  if (clientToken === serverToken) {
    next();
  } else {
    sender.failure(res, { auth: UNAUTHORIZED_MESSAGE }, 401);
  }
}
