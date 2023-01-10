<script lang="ts">
  import { page } from "$app/stores";
  import { slide } from "svelte/transition";

  $: title = $page.route.id === "/" ? "Home" : $page.route.id
</script>

<div in:slide class="flex flex-col w-full items-center bg-slate-200 p-10">
  <h1 class="text-5xl text-midnight">{title}</h1>
</div>