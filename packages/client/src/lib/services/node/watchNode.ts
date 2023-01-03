import { PUBLIC_API_BASE_URL, PUBLIC_API_TOKEN } from "$env/static/public";

export async function watchNode(userAddress: string, nodeAddress: string) {
  try {
    const init = {
      headers: new Headers({
        Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
      method: "POST",
      body: JSON.stringify({ address: nodeAddress }),
    };

    const response = await fetch(
      `${PUBLIC_API_BASE_URL}/api/nodes/${userAddress}`,
      init
    );

    const data = await response.json();

    return data;
  } catch (e) {
    console.log(e);
  }
}
