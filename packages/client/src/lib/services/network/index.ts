import { network } from "$lib/stores/network";
import send from "$lib/utils/send";

const networkService = () => {};

networkService.init = async () => {
  const stats = await send("networks/stats");
  network.set(stats.data.stats);
};

export { networkService };
