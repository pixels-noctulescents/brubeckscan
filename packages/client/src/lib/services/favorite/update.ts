import send from "$lib/utils/send";

export async function update(id: string, update: any) {
  try {
    const favorite = await send(`favorites/${id}`, "PATCH", update);

    return favorite;
  } catch (e) {
    console.log(e);
  }
}
