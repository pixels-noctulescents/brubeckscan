import { constants } from "../../configs/constants";
import { formatNetworkStats } from "../../utils/format";
import { cache } from "../../clients/cache";
import { NetworkStats } from "@brubeckscan/common/types";

export async function getStats(): Promise<NetworkStats> {
  try {
    const cached: NetworkStats | undefined = cache.get("brubeckStats")

    if (cached) {
      return cached;
    } else {
      const urls = [constants.BRUBECK_APY, constants.BRUBECK_STATS];

      const requests = urls.map((url) => fetch(url).then((res) => res.json()));

      const data = await Promise.all(requests);

      const stats = formatNetworkStats(data);

      cache.set("brubeckStats", stats, 60);

      return stats;
    }
  } catch (e) {
    throw e;
  }
}
