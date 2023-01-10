import { user } from "$lib/stores";

export async function logout() {
  user.set(null);
  window.location.href = "/";
}
