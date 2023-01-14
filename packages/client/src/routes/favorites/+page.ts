import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { user, overview } from '$lib/stores';
import type { PageLoad } from './$types';
import send from '$lib/send';

export const load = (async ({ fetch }) => {
	const connected = get(user);

	if (connected) {
		const response = await send(`users/${connected.address}/overview`, 'GET', undefined, fetch);

		if (response.status === 'success') {
			return overview.set(response.data.overview);
		}
	} else {
		throw redirect(300, '/');
	}
}) satisfies PageLoad;
