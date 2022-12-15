import { request, gql } from "graphql-request";
import { constants } from "../../configs/constants";

export async function getDataStaked(address: string) {
  try {
    const query = gql`
        {
          erc20Balances(
            where: {
              account: "${address}"
              contract: "${constants.DATA_CONTRACT}"
            }
          ) {
            value
          }
        }
      `;

    const data = await request(constants.DATA_GRAPH_URL, query);

    const value = Math.floor(+data.erc20Balances[0].value);

    return {
      stakedDATA: value,
    };
  } catch (e) {
    throw e;
  }
}
