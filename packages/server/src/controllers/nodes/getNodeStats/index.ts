import { getStats } from "./getStats";
import { getRewards } from "./getRewards";
import { getDataSent } from "./getDataSent";
import { getDataStaked } from "./getDataStaked";

export async function getNodeStats(address: string) {
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

  return data;
}
