import type { LayoutLoad } from "./$types";

export const ssr = false;

export const load = (async ({ params, fetch }) => {
  try {
    return {};
  } catch (e) {
    console.log(e);
  }
}) satisfies LayoutLoad;
