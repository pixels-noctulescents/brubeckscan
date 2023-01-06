import { browser } from "$app/environment";
import { socketService } from "$lib/services/socket";
import { authService } from "$lib/services/auth";
import { networkService } from "$lib/services/network";
import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load = (async ({ params, fetch }) => {
  try {
    if (browser) {
      await authService.init();
      await socketService.init();
      await networkService.init();
    }

    return {};
  } catch (e) {
    console.log(e);
  }
}) satisfies LayoutLoad;
