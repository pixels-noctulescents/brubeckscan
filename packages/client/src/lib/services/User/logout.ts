import { user, overview } from "$lib/stores";

export async function logout() {
  user.set(undefined);
  overview.set(undefined);
  window.location.href = "/";
}
