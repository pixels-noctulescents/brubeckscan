import { NextFunction, Request, Response } from "express";
import { request, gql } from "graphql-request";
import { constants } from "../../configs/constants";

export async function getDataStaked(req: Request, res: Response, next: NextFunction) {
    try {
        const query = gql`
        {
          erc20Balances(
            where: {
              account: "${req.params.address}"
              contract: "${constants.DATA_CONTRACT}"
            }
          ) {
            value
          }
        }
      `;

      const data = await request(
        constants.DATA_GRAPH_URL,
        query
      );

      const value = Math.floor(+data.erc20Balances[0].value);

      res.json({ data: value });
    } catch(e) {
        next(e);
    }
}
