import send from "$lib/utils/send";
import { user } from "$lib/stores";

export async function update(address: string, data: any) {
  try {
    const updatedUser = await send(`users/${address}`, "PATCH", data);
    user.set(updatedUser.data.user);
    return;
  } catch (e) {
    console.log(e);
  }
}
