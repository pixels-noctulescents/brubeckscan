import { io } from "socket.io-client";
import { PUBLIC_SOCKET_URL } from "$env/static/public";
import { prices } from "$lib/stores/prices";
import { network } from "$lib/stores/network";
import { usersCount } from "$lib/stores/usersCount";
import { user } from "$lib/stores/user";
import { browser } from "$app/environment";
import type { RealTimePrices } from "@brubeckscan/common/types";

let socket = {};

if (browser) {
  const socket = io(PUBLIC_SOCKET_URL, { transports: ["websocket"] });

  socket.on("connect", () => {
    user.subscribe((user) => {
      if (user) {
      }
    });
  });

  socket.on("prices", (data: RealTimePrices) => {
    prices.set(data);
  });

  socket.on("stats", (data: any) => {
    network.set(data);
  });

  socket.on("clientCount", (data: any) => {
    usersCount.set(data);
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
}
export { socket };
