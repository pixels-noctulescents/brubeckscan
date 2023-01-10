import { fail } from '@sveltejs/kit';
import send from '$lib/utils/send';
import validator from 'validator';
import type { Actions } from './$types';

export const actions: Actions = {
    deleteFavorite: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id")?.toString();
        if (!id) {
            return fail(400, { id, error: "wrong idea" })
        }

        const favorite = await send(`favorites/${id}`, "DELETE");

        return { success: true, message: "Removed" }
    },
    saveFavorite: async ({ request }) => {
        const data = await request.formData();

        const favoriteName = data.get("name");
        const userAddress = data.get("userAddress");
        const favoriteAddress = data.get("favoriteAddress");

        if (!favoriteAddress) {
            return fail(400, { favoriteAddress, error: "Enter a node address" })
        }

        if (!validator.isEthereumAddress(favoriteAddress.toString())) {
            return fail(400, { favoriteAddress, error: "Invalid ETH address", address: favoriteAddress })
        }

        if (favoriteName && userAddress && favoriteAddress) {
            const favorite = await send(`favorites`, "POST", { favoriteName, favoriteAddress, userAddress });
        }

        return { success: true, message: "Saved" }
    },
    updateFavoriteName: async ({ request }) => {
        console.log("saving")
        const data = await request.formData();

        const favoriteId = data.get("id");
        const newName = data.get("name");

        if (!newName) {
            return fail(400, { newName, error: "Cannot be empty" })
        }

        if (newName.length > 50) {
            return fail(400, { newName, error: "No more than 50 characters" })
        }

        if (favoriteId) {
            const updated = await send(`favorites/${favoriteId.toString()}`, "POST", { name: newName });
            return { success: true, message: "Updated", action: "updateFavoriteName" }
        }
    }
};