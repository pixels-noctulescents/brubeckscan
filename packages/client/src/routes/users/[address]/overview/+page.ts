import { error } from '@sveltejs/kit';
import send from "$lib/utils/send";
import type { PageLoad } from "./$types";
import type Overview from "@brubeckscan/common/types"
import { user } from "$lib/stores/user";
import { get } from "svelte/store";

export const ssr = false;

export const load = (async ({ params, fetch }) => {
    const test = get(user);
    console.log("user", test);
    try {
        console.log("loading page");
        const response = await send(`users/${params.address}/overview`);

        if (response && response.status === "success") {
            const overview: Overview = response.data.overview;
            return {
                overview,
                userAddress: params.address
            }
        } else {
            throw error(500);
        }
    } catch (e) {
        console.log(e);
    }
}) satisfies PageLoad;