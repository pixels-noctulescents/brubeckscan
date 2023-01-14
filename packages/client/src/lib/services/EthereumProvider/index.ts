import detectEthereumProvider from '@metamask/detect-provider';
import { browser } from '$app/environment';
import UserService from '../User';
import { hasEthereumProvider } from '$lib/stores';

const EthereumProviderService = {
	init: async () => {
		if (browser) {
			const provider = await detectEthereumProvider();
			if (provider) {
				if (provider.isMetaMask) {
					hasEthereumProvider.set(true);
					const request = await (window as any).ethereum.request({
						method: 'eth_accounts'
					});
					if (request && request[0]) {
						await UserService.login(request[0]);
					}
					(window as any).ethereum.on('accountsChanged', async (accounts: string[]) => {
						if (accounts[0]) {
							await UserService.login(accounts[0]);
						} else {
							await UserService.logout();
						}
					});
				}
			}
		}
	}
};

export default EthereumProviderService;
