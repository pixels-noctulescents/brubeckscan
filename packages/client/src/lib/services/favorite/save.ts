import send from "$lib/utils/send";

export async function save(
  userAddress: string,
  favoriteAddress: string,
  favoriteName: string
) {
  try {
    const response = await send(`favorites`, "POST", {
      userAddress: userAddress,
      favoriteAddress: favoriteAddress,
      favoriteName: favoriteName,
    });
  } catch (e) {
    console.log(e);
  }
}
