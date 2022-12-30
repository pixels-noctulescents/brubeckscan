import { PUBLIC_API_BASE_URL } from "$env/static/public";
import type { Node } from "@brubeckscan/common/types";

export async function getNodeStats(address: string) {
  try {
    const response = await fetch(
      `${PUBLIC_API_BASE_URL}/api/nodes/stats/${address}`
    );

    const data = await response.json();

    const node: Node = data.data.node;

    return node;
  } catch (e) {
    console.log(e);
  }
}
