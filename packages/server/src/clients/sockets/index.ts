import { Server } from "socket.io";
import schedule from "node-schedule";
import { getPrices } from "../../controllers/markets/getPrices";

const socketsClient = () => {};

socketsClient.init = (server: any) => {
  // socket.io
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
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
