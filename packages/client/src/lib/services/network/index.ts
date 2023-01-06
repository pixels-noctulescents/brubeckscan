import { PUBLIC_API_BASE_URL } from "$env/static/public";
import { network } from "$lib/stores/network";

const networkService = () => {};

networkService.init = async () => {
  const brubeckResponse = await fetch(
    `${PUBLIC_API_BASE_URL}/api/networks/stats`
  );
  const brubeckData = await brubeckResponse.json();
  network.set(brubeckData.data.stats);
};

export { networkService };
