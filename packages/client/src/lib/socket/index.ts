import { io } from "socket.io-client";
import { PUBLIC_API_BASE_URL } from "$env/static/public";

const socket = io(PUBLIC_API_BASE_URL);

export { socket };
