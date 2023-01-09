import { socket } from "$lib/services/socket";
import { networkService } from "$lib/services/network";
import { authService } from "$lib/services/auth";

// Auth
authService.init();

// Network Service
await networkService.init();