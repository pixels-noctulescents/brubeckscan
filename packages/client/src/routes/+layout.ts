import type { LayoutLoad } from "./$types";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import { setupEthereumBrowserEnv } from "$lib/utils/bundle";
import { streamrNetwork } from "$lib/stores/streamrNetwork";
import { socketService } from "$lib/services/socket";

export const ssr = true;

export const load = (async ({ params, fetch }) => {
  // Get Streamr network stats and update stores
  const brubeckResponse = await fetch(
    `${PUBLIC_API_BASE_URL}/api/networks/stats`
  );
  const brubeckData = await brubeckResponse.json();
  streamrNetwork.set(brubeckData.data.stats);

  // Setup socket.io subscriptions
  socketService.init();

  // Check client browser for ethereum provider (e.g MetaMask) and existing connection
  await setupEthereumBrowserEnv();

  return {};
}) satisfies LayoutLoad;
