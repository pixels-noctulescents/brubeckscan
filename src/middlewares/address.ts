import { NextFunction, Request, Response } from "express";
import validator from "validator";

const INVALID_ADDRESS_MESSAGE = "Wrong request : invalid ethereum address.";

export function validateEthAddress(req: Request, res: Response, next: NextFunction) {
  if (!req.params.address || !validator.isEthereumAddress(req.params.address)) {
    next(new Error(INVALID_ADDRESS_MESSAGE));
  } else {
    next();
  }
}
