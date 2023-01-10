import detectEthereumProvider from "@metamask/detect-provider";
import { browser } from "$app/environment";
import UserService from "../user";
import { hasEthereumProvider } from "$lib/stores";

export const authService = {
  init: async () => {
    if (browser) {
      const provider = await detectEthereumProvider();
      if (provider) {
        if (provider.isMetaMask) {
          hasEthereumProvider.set(true);
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
    return true;
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
