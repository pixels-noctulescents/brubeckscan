import { constants } from "../configs/constants";
import { Network } from "@brubeckscan/common/types";
import { NetworkRewardCode } from "@brubeckscan/common/types";
import { cache } from "../clients/cache";

const NetworkManager = () => { };

NetworkManager.getNetworkStats = async (): Promise<Network | undefined> => {
    try {
        const cached: Network | undefined = cache.get("networkStats");

        if (cached) {
            return cached;
        }

        // Retrieve the data
        const stats = await fetchStats();

        if (stats) {
            // Format the data
            const network = formatStats(stats);
            if (network) {
                cache.set("networkStats", network, 60 * 3);
                return network;
            }
        }

        return undefined;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

async function fetchStats() {
    try {
        const urls = [constants.BRUBECK_APY, constants.BRUBECK_STATS];

        const requests = urls.map((url) => fetch(url).then((res) => res.json()));

        const data = await Promise.all(requests);

        if (data.length === requests.length) {
            return data;
        }

        return undefined;
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

function formatStats(data: Array<any>): Network {
    const averages = getAverages(data[1].lastRewards);

    const stats = {
        stats: {
            "24APR": data[0]["24h-APR"],
            "24APY": data[0]["24h-APY"],
            SPOTAPR: data[0]["spot-APR"],
            SPOTAPY: data[0]["spot-APY"],
            "24DATASTAKED": data[0]["24h-data-staked"],
            SPOTDATASTAKED: data[0]["spot-data-staked"],
        },
        averages: averages,
        lastRewards: data[1].lastRewards,
    };

    return stats;
}

function getAverages(codes: NetworkRewardCode[]) {
    let totalTopologySize = 0;
    let totalReceivedClaims = 0;
    let totalMeanPropagationDelay = 0;

    codes.map((code) => {
        totalTopologySize += code.topologySize;
        totalReceivedClaims += code.receivedClaims;
        totalMeanPropagationDelay += code.meanPropagationDelay;
    })

    let averageTopologySize = totalTopologySize / codes.length;
    let averageReceivedClaims = totalReceivedClaims / codes.length;
    let averageMeanPropagationDelay = totalMeanPropagationDelay / codes.length;

    return {
        averageTopologySize,
        averageReceivedClaims,
        averageMeanPropagationDelay,
    }
}

export default NetworkManager;