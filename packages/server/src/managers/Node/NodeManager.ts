import { BrubeckNodeStats, RewardCode } from "@brubeckscan/common/types/node";
import { BrubeckNetworkStats } from "@brubeckscan/common/types/networkStats";
import { fetchDataSent, fetchDataStaked, fetchRewards, fetchStats } from "./fetch";
import { constants } from "../../configs/constants";
import { cache } from "../../clients/cache";

class NodeManager {
  private readonly address: string;
  private nodeStats: BrubeckNodeStats;
  private networkStats: BrubeckNetworkStats;

  constructor(address: string, networkStats: BrubeckNetworkStats) {
    this.address = address;
    this.nodeStats = this.generateEmptyStats();
    this.networkStats = networkStats;
  }

  public async getStats(): Promise<BrubeckNodeStats> {
    const cached: any[] | undefined = cache.get(`nodeExternalData/${this.address}`);

    if (cached) {
      this.formatNodeStats(cached);
      return this.nodeStats;
    } else {
      const data = await this.getData();
      cache.set(`nodeExternalData/${this.address}`, data, 60);
      this.formatNodeStats(data);
      return this.nodeStats;
    }
  }

  private async getData(): Promise<any[] | undefined> {
    try {
      const requests = [fetchStats(this.address), fetchRewards(this.address), fetchDataSent(this.address), fetchDataStaked(this.address)];

      const responses = await Promise.allSettled(requests);

      const data = await Promise.all(
        responses.map(async (response) => {
          if (response.status === "fulfilled") {
            return response.value;
          }
        })
      );

      if (data.length === requests.length) {
        return data;
      } else {
        return undefined;
      }
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }

  private formatNodeStats(data: any): void {
    const totalDATASent: number = data[2]?.erc20Transfers.reduce((previous: any, current: any) => {
      return previous + +current.value;
    }, 0);

    const firstClaim = data[0].claimedRewardCodes[0];
    const lastClaim = data[0].claimedRewardCodes.at(-1);

    const claimedRewardCodes = data[0].claimedRewardCodes.slice(-10).reverse();

    const status = this.getStatus(claimedRewardCodes);

    // Build the actual node
    this.nodeStats = {
      address: this.address,
      status: status,
      staked: +data[3]?.stakedDATA || 0,
      toBeReceived: data[1].DATA - totalDATASent,
      sent: +totalDATASent || 0,
      rewards: data[1].DATA || 0,
      firstClaim: firstClaim || null,
      lastClaim: lastClaim || null,
      claimCount: +data[0].claimCount,
      claimPercentage: +data[0].claimPercentage,
      payouts: data[2]?.erc20Transfers,
      claimedRewardCodes: claimedRewardCodes,
      polygonScanURL: `${constants.POLYGONSCAN_BASE}${this.address}`,
      identiconURL: `${constants.IDENTICON_BASE}${this.address}`,
    };
  }

  private getStatus(codes: RewardCode[]) {
    if (!codes.length) return false;

    if (this.networkStats.lastRewards[0].code === codes[0]?.id) {
      return true;
    }

    if (this.networkStats.lastRewards[0].code === codes[1]?.id) {
      return true;
    }

    return false;
  }

  private generateEmptyStats(): BrubeckNodeStats {
    const node: BrubeckNodeStats = {
      address: "",
      polygonScanURL: "",
      identiconURL: "",
      staked: 0,
      rewards: 0,
      sent: 0,
      toBeReceived: 0,
      firstClaim: null,
      lastClaim: null,
      payouts: [],
      claimCount: 0,
      claimPercentage: 0,
      claimedRewardCodes: [],
      status: false,
    };

    return node;
  }
}

export default NodeManager;
