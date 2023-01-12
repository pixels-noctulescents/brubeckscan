import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
    const response = await fetch("api/nodes/0x7f82e2f593ae1aec6d499d0dc133c8f5d38302d9");

    const data = await response.json();

    return {
        response: data
    }
}) satisfies PageLoad;