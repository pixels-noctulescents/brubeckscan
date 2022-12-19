// ENV
import { dotenvLoad } from "dotenv-mono";
const dotenv = dotenvLoad();

// APP
import app from "./app";

app.listen(process.env.SERVER_PORT, () => {
  console.log(`App listening on port ${process.env.SERVER_PORT}`);
});
