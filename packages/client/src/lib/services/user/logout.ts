import { isConnected, user } from "$lib/stores/user";
import { favorites } from "$lib/stores/favorites";

export async function logout() {
  user.set({ address: "", createdAt: "", updatedAt: "", mainColor: "black", theme: "dark", Favorite: [] });
  isConnected.set(false);
  favorites.set([]);
  window.location.replace("/");
}
