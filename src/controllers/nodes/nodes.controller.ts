import { NextFunction, Request, Response } from "express";
import { send } from "../../utils/sender";
import { getDataStaked } from "./getDataStaked";
import { getDataSent } from "./getDataSent";
import { getStats } from "./getStats";
import { getRewards } from "./getRewards";
import { formatNodeStats } from "../../utils/format";

const nodesController = () => {};

nodesController.getNodeStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address;

    const requests = [
      getStats(address),
      getRewards(address),
      getDataSent(address),
      getDataStaked(address),
    ];

    const responses = await Promise.allSettled(requests);

    const data = await Promise.all(
      responses.map(async (response) => {
        if (response.status === "fulfilled") {
          return response.value;
        }
      })
    );

    const stats = formatNodeStats(data, address);

    send(res, stats);
  } catch (e) {
    next(e);
  }
};

export { nodesController };
