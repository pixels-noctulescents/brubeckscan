import { NextFunction, Request, Response } from "express";
import { request, gql } from "graphql-request";
import { constants } from "configs/constants";
import { send } from "utils/sender";

export async function getRewardsSent(req: Request, res: Response, next: NextFunction) {
  try {
    const query = gql`
            {
                erc20Transfers(
                    where: {
                        from: "${constants.STREAMR_ETH_ADDRESS}"
                        to: "${req.params.address}"
                        timestamp_gt: ${constants.MAINNET_TIMESTAMP}
                    }
                ) {
                    value timestamp
                }
            }
    `;

    const data = await request(constants.DATA_GRAPH_URL, query);

    send(res, data);
  } catch (e) {
    next(e);
  }
}
