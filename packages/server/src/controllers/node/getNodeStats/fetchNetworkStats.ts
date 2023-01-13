import { constants } from "../../../configs/constants";

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
