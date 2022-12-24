import { browser } from "$app/environment";
import { socket } from "$lib/socket";
import { prices } from "$lib/stores/prices";
import type { RealTimePrices } from "$lib/stores/prices";

const socketService = () => {};

socketService.init = () => {
  if (browser) {
    socket.on("prices", (data: RealTimePrices) => {
      prices.set(data);
    });
  }
};

export { socketService };
