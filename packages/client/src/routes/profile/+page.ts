import { browser } from "$app/environment";
import { user } from "$lib/stores/user";
import { get } from "svelte/store";
import { goto } from "$app/navigation";

export const load = async () => {
  if (browser) {
    const isConnected = get(user);
    if (!isConnected) {
      return await goto("/");
    }
  }
};
