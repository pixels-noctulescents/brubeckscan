import { prices } from "$lib/stores/prices";
import { network } from "$lib/stores/network";
import { app } from "$lib/stores/app";
import { io } from "socket.io-client";
import { PUBLIC_SOCKET_URL } from "$env/static/public";
import type { RealTimePrices } from "@brubeckscan/common/types";

const socketService = () => {};

const socket = io(PUBLIC_SOCKET_URL, { transports: ["websocket"] });

socketService.init = () => {
  socket.on("prices", (data: RealTimePrices) => {
    prices.set(data);
  });
  socket.on("stats", (data: any) => {
    network.set(data);
  });
  socket.on("connections", (data: any) => {
    console.log(data);
    app.set(data);
  });
};

export { socketService };
