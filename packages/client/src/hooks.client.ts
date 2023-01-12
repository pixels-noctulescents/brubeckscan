import { Socket } from "$lib/services/Socket";
import EthereumProviderService from "$lib/services/EthereumProvider";


(async () => {
    try {
        return await EthereumProviderService.init();
    } catch (e) {
        console.log(e);
    }
})()