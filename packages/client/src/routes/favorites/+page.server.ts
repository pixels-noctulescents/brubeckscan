import type { Actions } from './$types';
import send from '$lib/send';
import validator from 'validator';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
    addFavorite: async ({ request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const user = data.get("user");
        const address = data.get("address");
        if (!address) {
            return fail(400, { address, missing: true });
        }

        if (validator.isEthereumAddress(address?.toString())) {
            const response = await send(`favorites`, "POST", { userAddress: user?.toString(), favoriteAddress: address?.toString(), favoriteName: name?.toString() })
            return;
        }

        return fail(400, { address, invalid: true });
    },
    deleteFavorite: async ({ request }) => {
        const data = await request.formData();
        const id = await data.get("id");

        if (id) {
            const response = await send(`favorites/${id?.toString()}`, "DELETE");
            return;
        }

        return fail(400, { id, invalid: true });
    },
    saveFavorite: async ({ request }) => {
        const data = await request.formData();
        const newName = await data.get("newName");
        const id = await data.get("id");

        if (newName && id) {
            const response = await send(`favorites/${id?.toString()}`, "DELETE");
            return;
        }
    }
};