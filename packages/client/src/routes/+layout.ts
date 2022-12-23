import type { LayoutLoad } from "./$types";
import { setupEthereumBrowserEnv } from "$lib/utils/bundle";

export const ssr = true;

export const load = (async ({ params, fetch }) => {
  console.log("Layout load");
  await setupEthereumBrowserEnv();
  return {};
}) satisfies LayoutLoad;
