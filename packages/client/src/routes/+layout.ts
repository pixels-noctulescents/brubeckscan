import send from "$lib/send";
import type { LayoutLoad } from "./$types";
import type { Network } from "@brubeckscan/common/types";

export const load = (async ({ fetch }) => {
  const response = await send(`networks/stats`, "GET", undefined, fetch);

  if (response && response.status === "success") {
    const network: Network = response.data.stats
    return {
      network
    }
  }

  return {};
}) satisfies LayoutLoad;
