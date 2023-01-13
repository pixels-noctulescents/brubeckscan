import { user, overview, userOnNetwork } from "$lib/stores";

export async function logout() {
  user.set(undefined);
  userOnNetwork.set(undefined);
  overview.set(undefined);
  window.location.href = "/";
}
