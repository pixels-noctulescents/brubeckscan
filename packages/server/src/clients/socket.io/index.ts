import { Server } from "socket.io";
import schedule from "node-schedule";
import { getPrices } from "../../controllers/markets/getPrices";
import { getStats } from "../../controllers/networks/getStats";

const socketsClient = () => {};

socketsClient.init = (server: any) => {
  // socket.io
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  let activeConnections = 0;
  let activesUsers = [];

  io.on("connection", async (socket) => {
    activeConnections += 1;
    console.log("user connected");
    const prices = await getPrices();
    socket.emit("prices", prices);
    io.emit("connections", { activeConnections });
    socket.on("disconnect", () => {
      activeConnections -= 1;
      io.emit("connections", { activeConnections });
      console.log("user disconnected");
    });
  });

  const job = schedule.scheduleJob("*/5 * * * * *", async () => {
    const prices = await getPrices();
    const stats = await getStats();
    io.emit("prices", prices);
    io.emit("stats", stats);
  });
};

export { socketsClient };
