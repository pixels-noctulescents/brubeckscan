import detectEthereumProvider from "@metamask/detect-provider";
import { browser } from "$app/environment";
import UserService from "../user";
import { hasEthereumProvider, hasMetamask } from "$lib/stores/provider";

export const authService = {
  init: async () => {
    if (browser) {
      const provider = await detectEthereumProvider();
      if (provider) {
        hasEthereumProvider.set(true);
        // Check if the ethereum provider is MetaMask
        if (provider.isMetaMask) {
          hasMetamask.set(true);
          // Check existing connection
          await checkForExistingConnection();
          // Add account event
          (window as any).ethereum.on(
            "accountsChanged",
            async (accounts: string[]) => {
              if (accounts[0]) {
                await UserService.login(accounts[0]);
              } else {
                await UserService.logout();
              }
            }
          );
        }
      }
    }
  },
};

async function checkForExistingConnection() {
  const accounts = await (window as any).ethereum.request({
    method: "eth_accounts",
  });
  if (accounts.length) {
    await UserService.login(accounts[0]);
    return true;
  } else {
    return false;
  }
}
