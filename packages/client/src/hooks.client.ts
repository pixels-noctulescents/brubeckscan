import EthereumProviderService from '$lib/services/EthereumProvider';

(async () => {
	try {
		return await EthereumProviderService.init();
	} catch (e) {
		console.log(e);
	}
})();
