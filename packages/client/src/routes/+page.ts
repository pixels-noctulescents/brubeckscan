import type { PageLoad } from "./$types";
import { count } from "$lib/stores/networkStats";

export const load = (async ({ params, fetch }) => {
  const response = await fetch("http://localhost:3000/api/networks/stats");
  const data = await response.json();
  return {
    title: "Hello world!",
    content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
    networkStats: data,
  };
}) satisfies PageLoad;
