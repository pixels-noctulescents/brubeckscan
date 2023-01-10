import { user, overview } from "$lib/stores";
import send from "$lib/send";

export async function login(address: string) {
  try {
    const exist = await send(`users/${address}`);

    const response = await send(`users/${address}/overview`, undefined, undefined, fetch);

    if (response) {
      overview.set(response.data.overview)
    }

    if (exist.status === "success") {
      return user.set(exist.data.user);
    }

    // We create the account
    if (exist.status === "fail") {
      const create = await send(`users/${address}`, "POST");
      if (create.status === "success") {
        return user.set(create.data.user);
      }
    }

    // Failed if arrived here so clear
    return user.set(null);
  } catch (e) {
    console.log(e);
  }
}
