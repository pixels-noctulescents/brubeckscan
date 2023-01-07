import send from "$lib/utils/send";
import { user } from "$lib/stores/user";

export async function updateUser(address: string, data: any) {
  try {
    const updatedUser = await send(`api/users/${address}`, "PATCH", data);
    user.set(updatedUser.data.user);
    return;
  } catch (e) {
    console.log(e);
  }
}
