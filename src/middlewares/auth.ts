import { NextFunction, Request, Response } from "express";

export function validateAuth(req: Request, res: Response, next: NextFunction) {
  const clientToken = req.headers.authorization?.replace("Bearer ", "");
  const serverToken = process.env.AUTH_HEADER;

  if (clientToken === serverToken) {
    next();
  } else {
    next(new Error("Unauthorized."));
  }
}
