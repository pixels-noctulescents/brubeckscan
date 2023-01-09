import { isConnected, user } from "$lib/stores/user";
import { favorites } from "$lib/stores/favorites";
import { goto } from "$app/navigation";
import FavoriteService from "../favorite";

export async function logout() {
  try {
    user.set({ address: "", createdAt: "", updatedAt: "", mainColor: "black", theme: "dark", Favorite: [] });
    isConnected.set(false);
    favorites.set([]);
    FavoriteService.resetTotals();
    return await goto("/");
  } catch (e) {
    console.log(e);
  }
}
