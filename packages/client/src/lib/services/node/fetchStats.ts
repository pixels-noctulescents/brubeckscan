import type { Node } from "@brubeckscan/common/types";
import send from "$lib/utils/send";

export async function fetchStats(address: string) {
  try {
    const data = await send(`nodes/stats/${address}`);

    const node: Node = data.data.node;

    return node;
  } catch (e) {
    console.log(e);
  }
}
