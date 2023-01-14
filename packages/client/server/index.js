// my-server.js
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { handler } from '../dist/handler.js';
import express from 'express';

const app = express();

const port = process.env.CLIENT_PORT;

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(port || 3000, () => {
	console.log(`Listening on port ${port || 3000}`);
});
