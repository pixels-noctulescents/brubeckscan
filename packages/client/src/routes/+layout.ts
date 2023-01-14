import send from '$lib/send';
import SocketService from '$lib/services/Socket';
import type { LayoutLoad } from './$types';
import type { BrubeckNetworkStats } from '@brubeckscan/common/types/networkStats';
import type { OctokitRLatestReleaseResponse } from '@brubeckscan/common/types/octokit';

export const load = (async ({ fetch }) => {
	// socket.io
	const socket = await SocketService.init();

	// Get Brubeck network stats
	const networkResponse = await send(`networks/stats`, 'GET', undefined, fetch);

	// Get app info
	const appResponse = await send(`app/version`);

	if (appResponse && networkResponse) {
		const network: BrubeckNetworkStats = networkResponse.data.stats;
		const latestRelease: OctokitRLatestReleaseResponse = appResponse.data.latestRelease;

		return {
			network,
			latestRelease
		};
	}

	return {};
}) satisfies LayoutLoad;
