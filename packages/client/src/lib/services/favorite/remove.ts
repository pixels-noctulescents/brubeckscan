import send from "$lib/utils/send";
import { favorites } from "$lib/stores/favorites";

export async function remove(id: string) {
  try {
    const favorite = await send(`favorites/${id}`, "DELETE");

    favorites.update((items) => items.filter((item) => item.id !== id));

    return favorite;
  } catch (e) {}
}
