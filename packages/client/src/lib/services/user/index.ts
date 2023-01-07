import { login } from "./login";
import { logout } from "./logout";
import { saveFavorite } from "./saveFavorite";
import { deleteFavorite } from "./deleteFavorite";
import { updateFavorite } from "./updateFavorite";
import { updateUser } from "./updateUser";

const userService = () => {};

userService.login = login;
userService.logout = logout;
userService.saveFavorite = saveFavorite;
userService.deleteFavorite = deleteFavorite;
userService.updateFavorite = updateFavorite;
userService.update = updateUser;

export { userService };
