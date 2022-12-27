import * as dotenv from "dotenv";
dotenv.config();
import http from "http";
import app from "./app";
import { socketsClient } from "./clients/socket.io";

const server = http.createServer(app);

socketsClient.init(server);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on *:${process.env.SERVER_PORT}`);
});
