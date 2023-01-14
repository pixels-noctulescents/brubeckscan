import validator from 'validator';
import { redirect } from '@sveltejs/kit';
import send from '$lib/send';
import type { PageLoad } from './$types';
import type { BrubeckNodeStats } from '@brubeckscan/common/types/node';

export const load = (async ({ params, fetch }) => {
	if (!params.address || !validator.isEthereumAddress(params.address)) {
		throw redirect(300, '/');
	}

	const response = await send(`nodes/stats/${params.address}`, 'GET', undefined, fetch);

	if (!response || response.status === 'fail') {
		throw redirect(300, '/');
	}

	const node: BrubeckNodeStats = response.data.node;

	return {
		address: params.address,
		node: node
	};
}) satisfies PageLoad;
