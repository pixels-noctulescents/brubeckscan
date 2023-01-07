import send from "$lib/utils/send";
import { favorites } from "$lib/stores/favorites";

export async function deleteFavorite(nodeId: string) {
  try {
    const favorite = await send("api/nodes", "DELETE", { nodeId });

    favorites.update((items) => items.filter((item) => item.id !== nodeId));

    return favorite;
  } catch (e) {}
}
