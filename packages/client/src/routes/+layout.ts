import { browser } from "$app/environment";
import detectEthereumProvider from "@metamask/detect-provider";
import type { LayoutLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  if (browser) {
    const provider = await detectEthereumProvider();
    return {
      provider,
    };
  }
}) satisfies LayoutLoad;
