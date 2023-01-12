import EthereumProviderService from "$lib/services/EthereumProvider";
import type { LayoutLoad } from "./$types";
import type { Network } from "@brubeckscan/common/types";
import send from "$lib/send";

export const load = (async ({ params, fetch }) => {
  await EthereumProviderService.init();
  const response = await send(`networks/stats`, "GET", undefined, fetch);
  if (response.status === "success") {
    const network: Network = response.data.stats
    return {
      network
    }
  }

  return {};
}) satisfies LayoutLoad;
