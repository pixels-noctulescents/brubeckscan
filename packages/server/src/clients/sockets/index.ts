import { Server } from "socket.io";
import schedule from "node-schedule";
import { getPrices } from "../../controllers/markets/getPrices";

const socketsClient = () => {};

socketsClient.init = (server: any) => {
  // socket.io
  const io = new Server(server, {
    cors: {
      origin: ["*", "http://localhost:3771", "http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("homepage", (message) => {
      console.log(message);
      io.emit("homepage", message);
    });
    socket.on("disconnect", () => {
      console.log("user disconnecd");
    });
  });

  const job = schedule.scheduleJob("*/5 * * * * *", async () => {
    const prices = await getPrices();
    io.emit("prices", prices);
  });
};

export { socketsClient };
