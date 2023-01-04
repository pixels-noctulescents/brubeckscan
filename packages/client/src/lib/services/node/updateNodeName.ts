import { PUBLIC_API_BASE_URL, PUBLIC_API_TOKEN } from "$env/static/public";

export async function updateNodeName(nodeId: string, nodeName: string) {
  try {
    const init = {
      headers: new Headers({
        Authorization: `Bearer ${PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      }),
      method: "PATCH",
      body: JSON.stringify({ nodeId, nodeName }),
    };

    const response = await fetch(`${PUBLIC_API_BASE_URL}/api/nodes`, init);

    const data = await response.json();

    return data;
  } catch (e) {}
}
