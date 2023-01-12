<script lang="ts">
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class="flex flex-col justify-between items-center min-h-screen">
  {#if data.network}
    <Header network={data.network}/>
  {/if}
  <main class="flex flex-col grow w-full items-center bg-slate-100 min-h-[600px]">
    <div class="flex w-full p-5 xl:max-w-screen-lg xl:px-0 py-10 xl:pb-40">
      <slot />
    </div>
  </main>
  <Footer />
</div>