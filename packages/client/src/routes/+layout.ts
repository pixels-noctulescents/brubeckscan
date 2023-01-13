import send from "$lib/send";
import type { LayoutLoad } from "./$types";
import type { BrubeckNetworkStats } from "@brubeckscan/common/types/networkStats"

export const load = (async ({ fetch }) => {
  const response = await send(`networks/stats`, "GET", undefined, fetch);

  if (response && response.status === "success") {
    const network: BrubeckNetworkStats = response.data.stats
    return {
      network
    }
  }

  return {};
}) satisfies LayoutLoad;
