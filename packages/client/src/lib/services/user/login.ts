import { isConnected, user } from "$lib/stores/user";
import type { Favorite, User } from "@brubeckscan/common/types";
import { theme } from "$lib/stores/theme";
import { favorites } from "$lib/stores/favorites";
import send from "$lib/utils/send";

export async function login(address: string) {
  try {
    const exists = await send(`users/${address}`);

    if (exists.status === "success") {
      updateStores(exists.data.user);
    } else {
      const create = await send(`users/${address}`, "POST");
      updateStores(create.data.user);
    }
  } catch (e) {
    console.log(e);
  }
}

function updateStores(data: User) {
  isConnected.set(true);
  user.set({
    address: data.address,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    mainColor: data.mainColor,
    theme: data.theme,
    Favorite: data.Favorite
  });
  theme.set(data.theme);
  favorites.set(data.Favorite);
}

async function getFavoritesStats(favorites: Favorite[]) {
  const requests = favorites.map(item => send(`nodes/stats/${item.address}`));
  const responses = await Promise.all(requests);
  console.log(responses);
}
