import { Server } from "socket.io";
import schedule from "node-schedule";
import { getPrices } from "../../controllers/markets/getPrices";

const socketsClient = () => {};

socketsClient.init = (server: any) => {
  // socket.io
  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", async (socket) => {
    const prices = await getPrices();
    socket.emit("prices", prices);
    socket.on("disconnect", () => {});
  });

  const job = schedule.scheduleJob("*/5 * * * * *", async () => {
    const prices = await getPrices();
    io.emit("prices", prices);
  });
};

export { socketsClient };
