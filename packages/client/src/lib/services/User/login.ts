import send from "$lib/send";
import { user, userOnNetwork, overview } from "$lib/stores";
import type { User } from "@brubeckscan/common/types";

export async function login(address: string) {
  try {
    const exist = await send(`users/${address}`);

    if (exist.status === "success") {
      const updated = await updateUserData(exist.data.user);
      return updated;
    }

    if (exist.status === "fail") {
      const create = await send(`users/${address}`, "POST");
      const updated = await updateUserData(create.data.user);
      return updated;
    }

    return user.set(undefined);
  } catch (e) {
    console.log(e);
  }
}

async function updateUserData(userDb: User): Promise<boolean> {
  try {
    const getOverview = await send(`users/${userDb.address}/overview`, undefined, undefined, fetch);
    const getUserOnNetwork = await send(`nodes/stats/${userDb.address}`, undefined, undefined, fetch);

    if (getUserOnNetwork) {
      userOnNetwork.set(getUserOnNetwork.data.node);
    }

    if (getOverview) {
      overview.set(getOverview.data.overview)
    }

    user.set(userDb);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
