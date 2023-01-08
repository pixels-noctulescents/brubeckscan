import { login } from "./login";
import { logout } from "./logout";
import { update } from "./update";

const userService = () => {};

userService.login = login;
userService.logout = logout;
userService.update = update;

export { userService };
