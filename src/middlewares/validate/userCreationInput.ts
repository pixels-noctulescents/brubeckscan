import { NextFunction, Request, Response } from "express";
import { sender } from "../../utils/sender";
import validator from "validator";

export function validateUserCreationInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.body.address) {
    sender.failure(res, { address: "Missing user ethereum address." }, 400);
  }

  if (!validator.isEthereumAddress(req.body.address)) {
    sender.failure(res, { address: "Not a valid ethereum address." }, 400);
  }

  next();
}
