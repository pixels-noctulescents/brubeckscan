import { isConnected, user } from "$lib/stores/user";
import { favorites } from "$lib/stores/favorites";
import { goto } from "$app/navigation";

export async function logout() {
  try {
    user.set({ address: "", createdAt: "", updatedAt: "" , mainColor: "black", theme: "dark"});
    isConnected.set(false);
    favorites.set([]);
    await goto("/");
  } catch (e) {
    console.log(e);
  }
}
