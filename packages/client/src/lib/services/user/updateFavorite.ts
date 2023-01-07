import send from "$lib/utils/send";

export async function updateFavorite(nodeId: string, nodeName: string) {
  try {
    const favorite = await send("api/nodes", "PATCH", { nodeId, nodeName });

    return favorite;
  } catch (e) {
    console.log(e);
  }
}
