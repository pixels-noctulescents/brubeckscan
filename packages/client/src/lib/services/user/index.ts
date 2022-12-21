import { login } from "./login";
import { logout } from "./logout";

const userService = () => {};

userService.login = login;
userService.logout = logout;

export { userService };
