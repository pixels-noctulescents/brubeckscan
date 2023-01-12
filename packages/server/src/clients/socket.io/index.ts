import { Server } from "socket.io";
import schedule from "node-schedule";
import { getPrices } from "../../controllers/markets/getPrices";
import NetworkManager from "../../managers/NetworkManager";

const socketsClient = () => { };

socketsClient.init = (server: any) => {
  // socket.io
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", async (socket) => {
    socket.on("connectionEvent", (data: any) => { });
    socket.on("disconnect", () => { });
  });

  const job = schedule.scheduleJob("*/5 * * * * *", async () => {
    const prices = await getPrices();
    const stats = await NetworkManager.getNetworkStats();
    io.emit("prices", prices);
    io.emit("stats", stats);
    io.emit("clientCount", io.engine.clientsCount);
  });
};

export { socketsClient };
