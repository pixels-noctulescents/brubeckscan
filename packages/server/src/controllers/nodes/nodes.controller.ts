import { NextFunction, Request, Response } from "express";
import UsersDAO from "../../dao/users/users.dao";
import { getNodeStats } from "./getNodeStats";
import { join } from "./join";
import { sender } from "../../utils/sender";
import { FavoritesTotals } from "@brubeckscan/common/types";


const NodesController = () => { };

NodesController.getNodeStats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const address = req.params.address;

    const node = await getNodeStats(address);
    if (node) {
      return sender.success(res, { node: node });
    }

    return sender.failure(res, { message: "Could not get node" });

  } catch (e) {
    next(e);
  }
};

NodesController.getAllFromUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userAddress = req.params.address;

    const exist = await UsersDAO.find(userAddress);

    if (!exist) {
      return sender.failure(res, { user: "Not found" }, 404);
    }

    if (exist) {
      let totals: FavoritesTotals = {
        nodes: 0,
        toBeReceived: 0,
        staked: 0,
        sent: 0,
        rewards: 0,
        statuses: 0
      }

      const favorites = await Promise.all(exist.Favorite.map(async (favorite) => {
        const stats = await getNodeStats(favorite.address);
        if (stats) {
          totals.sent += stats.dataSent;
          totals.staked += stats.dataStaked;
          totals.toBeReceived += stats.dataToBeReceived;
          totals.rewards += stats.totalRewardsInData;
        }
        return { favorite, stats };
      }))

      const ok = favorites.filter((item) => {
        return item.stats?.status
      })

      const percentage = ok.length / exist.Favorite.length * 100;

      totals.statuses = Math.round(percentage);
      totals.nodes = exist.Favorite.length;

      return sender.success(res, { overview: { totals, favorites } });
    }
  } catch (e) {
    next(e);
  }
};

export default NodesController;
