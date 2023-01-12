import validator from "validator";
import { redirect } from "@sveltejs/kit";
import send from "$lib/send";
import type { PageLoad } from "./$types";
import type Node from "@brubeckscan/common/types";

export const load = (async ({ params, fetch }) => {
    if (!params.address || !validator.isEthereumAddress(params.address)) {
        throw redirect(300, "/");
    }

    const response = await send(`nodes/stats/${params.address}`, "GET", undefined, fetch);

    if (!response || response.status === "fail") {
        throw redirect(300, "/");
    }

    const node: Node = response.data.node

    return {
        address: params.address,
        node: node
    }

}) satisfies PageLoad;