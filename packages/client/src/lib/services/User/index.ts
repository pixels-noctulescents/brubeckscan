import { login } from './login';
import { logout } from './logout';
import { update } from './update';

const UserService = () => {};

UserService.login = login;
UserService.logout = logout;
UserService.update = update;

export default UserService;
