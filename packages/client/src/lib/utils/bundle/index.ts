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
        // Add account event
        (window as any).ethereum.on(
          "accountsChanged",
          async (accounts: string[]) => {
            if (accounts[0]) {
              await userService.login(accounts[0]);
            } else {
              await userService.logout();
            }
          }
        );
      }
    }
  }
}

async function checkForExistingConnection(fetch: any) {
  const accounts = await (window as any).ethereum.request({
    method: "eth_accounts",
  });
  if (accounts.length > 0) {
    await userService.login(accounts[0]);
    return true;
  } else {
    return false;
  }
}
