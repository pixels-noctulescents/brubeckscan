import send from '$lib/send';
import type { RequestHandler } from './$types';

export const GET = (async (request) => {
	const node = await send(`nodes/stats/${request.params.address}`);
	return new Response(JSON.stringify(node));
}) satisfies RequestHandler;
