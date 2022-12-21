import type { LayoutLoad } from "./$types";
import { setupEthereumBrowserEnv } from "$lib/utils/bundle";

export const load = (async ({ params, fetch }) => {
  await setupEthereumBrowserEnv(fetch);
  return {};
}) satisfies LayoutLoad;
