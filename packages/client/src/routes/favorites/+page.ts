import { redirect } from '@sveltejs/kit';
import type { Overview } from "@brubeckscan/common/types";
import type { PageLoad } from "./$types";
import { user } from "$lib/stores";
import { get } from 'svelte/store';
import send from '$lib/utils/send';

export const ssr = false;

export const load = (async ({ params, fetch }) => {
    const connectedUser = get(user);

    if (!connectedUser) throw redirect(307, "/");

    const response = await send(`users/${connectedUser.address}/overview`);

    const overview: Overview = response.data.overview;

    if (!overview) throw redirect(300, "/");

    return {
        overview
    }
}) satisfies PageLoad;