import type { PageLoad } from './$types';
import type { History } from '@brubeckscan/common/types/networkStats';
import send from '$lib/send';

export const load = (async ({ params, fetch }) => {
    const response = await send("networks/tvlhistory");

    if (response.status === "success") {
        const history: History = response.data.history;

        return {
            history
        }
    } else {
        return {};
    }
}) satisfies PageLoad;