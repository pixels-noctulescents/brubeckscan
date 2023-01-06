import { isConnected, user } from "$lib/stores/user";
import { goto } from "$app/navigation";

export async function logout() {
  try {
    user.set({ address: "", nodes: [], createdAt: "", updatedAt: "" });
    isConnected.set(false);
    await goto("/");
  } catch (e) {
    console.log(e);
  }
}
