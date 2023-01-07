import send from "$lib/utils/send";
import { favorites } from "$lib/stores/favorites";

export async function saveFavorite(
  userAddress: string,
  nodeAddress: string,
  nodeName: string
) {
  try {
    // Request
    const response = await send(`api/nodes/${userAddress}`, "POST", {
      address: nodeAddress,
      name: nodeName,
    });

    if (response.status === "success") {
      favorites.update((items) => {
        return [...items, response.data.node];
      });
    }
  } catch (e) {
    console.log(e);
  }
}
