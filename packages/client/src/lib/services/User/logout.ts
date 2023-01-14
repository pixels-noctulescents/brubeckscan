import { user, userOnNetwork } from '$lib/stores';

export async function logout() {
	user.set(undefined);
	userOnNetwork.set(undefined);
	window.location.href = '/';
}
