import { PUBLIC_API_BASE_URL, PUBLIC_API_TOKEN } from "$env/static/public";
import { isConnected, user } from "$lib/stores/user";

export async function login(address: string) {
  try {
    const data = await fetchUser(address);

    if (data) {
      if (data.status === "fail") {
        const user = await createUser(address);
        updateUserStores(user.data.user);
      } else {
        updateUserStores(data.data.user);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

async function fetchUser(address: string) {
  try {
    const init = {
      headers: new Headers({
        Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
      }),
    };

    const response = await fetch(
      `${PUBLIC_API_BASE_URL}/api/users/${address}`,
      init
    );

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

async function createUser(address: string) {
  try {
    const init = {
      headers: new Headers({
        Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
      method: "POST",
      body: JSON.stringify({ address }),
    };

    const response = await fetch(`${PUBLIC_API_BASE_URL}/api/users`, init);

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}

function updateUserStores(data: any) {
  isConnected.set(true);
  user.set({
    address: data.address,
    nodes: data.Node,
  });
}
