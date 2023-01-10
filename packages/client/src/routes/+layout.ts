import EthereumProviderService from "$lib/services/EthereumProvider";
import type { LayoutLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  await EthereumProviderService.init();
}) satisfies LayoutLoad;
