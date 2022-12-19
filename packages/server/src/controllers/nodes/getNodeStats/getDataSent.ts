import { request, gql } from "graphql-request";
import { constants } from "../../../configs/constants";

export async function getDataSent(address: string) {
  try {
    const query = gql`
            {
                erc20Transfers(
                    where: {
                        from: "${constants.STREAMR_ETH_ADDRESS}"
                        to: "${address}"
                        timestamp_gt: ${constants.MAINNET_TIMESTAMP}
                    }
                ) {
                    value timestamp
                }
            }
    `;

    const data = await request(constants.DATA_GRAPH_URL, query);

    return data;
  } catch (e) {
    throw e;
  }
}
