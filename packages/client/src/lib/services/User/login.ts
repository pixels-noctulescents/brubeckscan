import send from '$lib/send';
import { user, userOnNetwork, selectedTheme } from '$lib/stores';
import type { DUser } from '@brubeckscan/common/types/db';

export async function login(address: string) {
	try {
		const exist = await send(`users/${address}`);

		if (exist.status === 'success') {
			const updated = await updateUserData(exist.data.user);
			return updated;
		}

		if (exist.status === 'fail') {
			const create = await send(`users/${address}`, 'POST');
			const updated = await updateUserData(create.data.user);
			return updated;
		}

		return user.set(undefined);
	} catch (e) {
		console.log(e);
	}
}

async function updateUserData(dUser: DUser): Promise<boolean> {
	try {
		const getUserOnNetwork = await send(`nodes/stats/${dUser.address}`);

		if (getUserOnNetwork) {
			userOnNetwork.set(getUserOnNetwork.data.node);
		}

		user.set(dUser);
		selectedTheme.set(dUser.theme);

		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
}
