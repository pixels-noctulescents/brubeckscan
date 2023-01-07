import { NextFunction, Request, Response } from "express";
import validator from "validator";
import { sender } from "../../utils/sender";

const INVALID_ADDRESS_MESSAGE = "Invalid ethereum address.";

export function validateEthAddress(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.params.address || !validator.isEthereumAddress(req.params.address)) {
    sender.failure(res, { address: INVALID_ADDRESS_MESSAGE }, 400);
  } else {
    next();
  }
}
