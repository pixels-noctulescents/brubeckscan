import { NextFunction, Request, Response } from "express";
import { sender } from "../../utils/sender";
import validator from "validator";

export function validateNodeCreationInput(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.params.address) {
    return sender.failure(res, { userAddress: "Missing user address." }, 400);
  }

  if (!req.body.address) {
    return sender.failure(res, { nodeAddress: "Missing node address." }, 400);
  }

  if (!validator.isEthereumAddress(req.body.address)) {
    return sender.failure(
      res,
      { address: "Not a valid ethereum address." },
      400
    );
  }

  if (!validator.isEthereumAddress(req.params.address)) {
    return sender.failure(
      res,
      { address: "Not a valid ethereum address." },
      400
    );
  }

  next();
}
