import { constants } from "../../configs/constants";
import { formatNetworkStats } from "../../utils/format";

export async function getStats() {
  try {
    const urls = [constants.BRUBECK_APY, constants.BRUBECK_STATS];

    const requests = urls.map((url) => fetch(url).then((res) => res.json()));

    const data = await Promise.all(requests);

    const stats = formatNetworkStats(data);

    return stats;
  } catch (e) {
    throw e;
  }
}
