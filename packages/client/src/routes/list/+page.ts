import type { PageLoad } from "./$types";

export const ssr = false;

export const load = (async ({ params, fetch }) => {
  return {};
}) satisfies PageLoad;
