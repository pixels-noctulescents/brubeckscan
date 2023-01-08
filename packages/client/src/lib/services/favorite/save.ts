import send from "$lib/utils/send";
import { favorites } from "$lib/stores/favorites";

export async function save(
  userAddress: string,
  favoriteAddress: string,
  favoriteName: string
) {
  try {
    // Request
    const response = await send(`favorites`, "POST", {
      userAddress: userAddress,
      favoriteAddress: favoriteAddress,
      favoriteName: favoriteName,
    });

    if (response.status === "success") {
      favorites.update((items) => {
        return [...items, response.data.favorite];
      });
    }
  } catch (e) {
    console.log(e);
  }
}
