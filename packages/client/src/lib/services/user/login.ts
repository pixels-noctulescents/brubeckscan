import { user } from "$lib/stores";
import send from "$lib/utils/send";

export async function login(address: string) {
  try {
    const exist = await send(`users/${address}`);

    // If the user exists, we log it - eg. Set the store
    if (exist.status === "success") return user.set(exist.data.user);

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
