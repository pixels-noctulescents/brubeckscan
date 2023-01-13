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
            return fail(400, { message: "Missing address." });
        }

        if (validator.isEthereumAddress(address?.toString())) {
            await send(`favorites`, "POST", { userAddress: user?.toString(), favoriteAddress: address?.toString(), favoriteName: name?.toString() })
            return { message: "Saved 🥳", add: { address } };
        }

        return fail(400, { message: "Invalid ethereum address.", add: { address } });
    },
    deleteFavorite: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");

        if (id) {
            await send(`favorites/${id?.toString()}`, "DELETE");
            return;
        }

        return fail(400, { id, invalid: true });
    },
    updateFavorite: async ({ request }) => {
        const data = await request.formData();
        const newName = data.get("newName");
        const baseName = data.get("baseName");
        const id = data.get("id");

        if (!newName) {
            return fail(400, { newName, missing: true });
        }

        if (baseName === newName) {
            return fail(400, { newName, invalid: true });
        }

        if (newName && id) {
            await send(`favorites/${id?.toString()}`, "POST", { name: newName });
            return;
        }
    }
};