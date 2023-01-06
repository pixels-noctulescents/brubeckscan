import { browser } from "$app/environment";
import { socketService } from "$lib/services/socket";
import { authService } from "$lib/services/auth";
import { networkService } from "$lib/services/network";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load = (async ({ params, fetch }) => {
  try {
    if (browser) {
      await socketService.init();
      await authService.init();
      await networkService.init();
    }
  } catch (e) {
    console.log(e);
  }

  // Check client browser for ethereum provider (e.g MetaMask) and existing connection

  return {};
}) satisfies LayoutLoad;
