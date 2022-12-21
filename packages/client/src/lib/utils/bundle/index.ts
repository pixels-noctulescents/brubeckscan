import { browser } from "$app/environment";
import { userService } from "$lib/services/user";
import detectEthereumProvider from "@metamask/detect-provider";
import {
  hasEthereumProvider,
  hasMetamask,
} from "$lib/stores/ethereumBrowserEnv";

export async function setupEthereumBrowserEnv(fetch: any) {
  if (browser) {
    const provider = await detectEthereumProvider();
    if (provider) {
      hasEthereumProvider.set(true);
      // Check if the ethereum provider is MetaMask
      if (provider.isMetaMask) {
        hasMetamask.set(true);
        // Check existing connection
        const hasConnection = await checkForExistingConnection(fetch);
      }
    }
  }
}

async function checkForExistingConnection(fetch: any) {
  const accounts = await (window as any).ethereum.request({
    method: "eth_accounts",
  });
  if (accounts.length > 0) {
    await userService.login(fetch, accounts[0]);
    return true;
  } else {
    return false;
  }
}
