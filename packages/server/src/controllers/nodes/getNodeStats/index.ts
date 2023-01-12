import { getStats } from "./getStats";
import { getRewards } from "./getRewards";
import { getDataSent } from "./getDataSent";
import { getDataStaked } from "./getDataStaked";
import { formatNodeStats } from "../../../utils/format";
import type Node from "@brubeckscan/common/types/node";
import { generate } from "../../../utils/generate";
import { cache } from "../../../clients/cache";

export async function getNodeStats(address: string): Promise<Node> {
  const cached: Node | undefined = cache.get(`node/${address}`);

  if (cached) {
    return cached;
  }

  let node = generate.emptyNode();

  try {
    const requests = [
      getStats(address),
      getRewards(address),
      getDataSent(address),
      getDataStaked(address),
    ];

    const responses = await Promise.allSettled(requests);

    const data = await Promise.all(
      responses.map(async (response) => {
        if (response.status === "fulfilled") {
          return response.value;
        }
      })
    );

    // Check if all promises have resolved before data aggregation
    if (data.length === requests.length) {
      node = await formatNodeStats(data, address);
      cache.set(`node/${address}`, node, 60);
      return node;
    }

    return node;
  } catch (e) {
    console.error(e);
    return node;
  }
}
