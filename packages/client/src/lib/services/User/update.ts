import send from '$lib/send';
import { user } from '$lib/stores';
import type { DUser } from '@brubeckscan/common/types/db';

export async function update(address: string, data: any) {
	try {
		const response = await send(`users/${address}`, 'PATCH', data);

		if (response) {
			const updatedUser: DUser = response.data.user;
			user.set(updatedUser);
		}

		return;
	} catch (e) {
		console.log(e);
	}
}
