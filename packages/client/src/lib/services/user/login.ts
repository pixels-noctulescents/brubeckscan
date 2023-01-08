import { isConnected, user } from "$lib/stores/user";
import { theme } from "$lib/stores/theme";
import { favorites } from "$lib/stores/favorites";

import send from "$lib/utils/send";

export async function login(address: string) {
  try {
    const data = await fetchUser(address);

    if (data) {
      if (data.status === "fail") {
        const user = await createUser(address);
        updateStores(user.data.user);
      } else {
        updateStores(data.data.user);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

async function fetchUser(address: string) {
  try {
    const user = await send(`users/${address}`);

    return user;
  } catch (e) {
    console.log(e);
  }
}

async function createUser(address: string) {
  try {
    const user = await send(`users/${address}`, "POST");

    return user;
  } catch (e) {
    console.log(e);
  }
}

function updateStores(data: any) {
  isConnected.set(true);
  user.set({
    address: data.address,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    mainColor: data.mainColor,
    theme: data.theme
  });
  theme.set(data.theme);
  favorites.set(data.Favorite);
}
