import { isConnected, user } from "$lib/stores/user";
import { goto } from "$app/navigation";

export async function logout() {
  try {
    user.set({ address: null, nodes: [] });
    isConnected.set(false);
    await goto("/");
  } catch (e) {
    console.log(e);
  }
}
