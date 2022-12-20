// my-server.js
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { handler } from "../dist/handler.js";
import express from "express";

const app = express();

// add a route that lives separately from the SvelteKit app
app.get("/healthcheck", (req, res) => {
  res.end("ok");
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(3771, () => {
  console.log(`Listening on port 3771`);
});
