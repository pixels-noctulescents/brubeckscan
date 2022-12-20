import type { LayoutLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  const response = await fetch("http://51.38.184.53:3770/api/networks/stats");
  const data = await response.json();
  return {
    title: "Hello world!",
    content: "Welcome to our blog. Lorem ipsum dolor sit amet...",
    networkStats: data,
  };
}) satisfies LayoutLoad;
