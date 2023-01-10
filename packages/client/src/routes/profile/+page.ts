import { redirect } from '@sveltejs/kit';
import type { PageLoad } from "./$types";
import { user } from "$lib/stores";
import { get } from 'svelte/store';

export const ssr = false;

export const load = (async ({ params, fetch }) => {
  if (!get(user)) {
    throw redirect(307, "/");
  }
}) satisfies PageLoad;