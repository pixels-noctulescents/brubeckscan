import { request, gql } from "graphql-request";
import { constants } from "../../configs/constants";

export async function fetchRewards(address: string) {
    try {
        const response = await fetch(
            `${constants.BRUBECK_NODE_REWARDS_BASE}${address}`
        );

        const data = await response.json();

        return data;
    } catch (e) {
        throw e;
    }
}


export async function fetchStats(address: string) {
    try {
        const response = await fetch(
            `${constants.BRUBECK_NODE_STATS_BASE}${address}`
        );

        const data = await response.json();

        return data;
    } catch (e) {
        throw e;
    }
}

export async function fetchDataSent(address: string) {
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

export async function fetchDataStaked(address: string) {
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